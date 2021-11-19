from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging
from models import db, Todo
from sqlalchemy import update

logging.basicConfig(filename='flask.logs')

todo_app = Flask(__name__)
todo_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
todo_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

todo_api = Api(todo_app)


class TodoRUD(Resource):
    def get(self, **kwargs):
        id = kwargs.get('id')
        todo = Todo.query.get(id)

        if not todo:
            abort(404, message='id is not found')

        data = {
            'id': todo.id,
            'title': todo.title,
            'description': todo.description,
            'priority': todo.priority,
            'completed': todo.completed
        }

        return data, 200

    def delete(self, *args, **kwargs):
        id = kwargs.get("id")
        todo = Todo.query.get(id)

        if not todo:
            return {'response': 'Todo id not found'}, 404

        db.session.delete(todo)
        db.session.commit()

        return {'response': f'todo with id={id} is deleted successfully'}

    def patch(self, *args, **kwargs):
        print(args)
        print(kwargs)
        print(request.form.get("title"))

        id = kwargs.get('id')
        todo = Todo.query.get(id)

        if not todo:
            return {'response': 'Todo id not found'}, 404

        todo.title = request.form.get(
            'title') if request.form.get('title') else todo.title
        todo.description = request.form.get('description') if request.form.get(
            'description') else todo.description
        todo.priority = int(request.form.get('priority')) if request.form.get(
            'priority') else todo.priority
        todo.completed = bool(request.form.get('completed')) if request.form.get(
            'completed') else todo.completed

        print(request.form.get('title'))
        print(todo.title)

        db.session.commit()

        return {'response': 'Todo is updated successfully'}


class TodoLC(Resource):
    def get(self):
        try:
            todos = Todo.query.all()
            todos_list = []

            for todo in todos:
                todos_list.append({
                    'id': todo.id,
                    'title': todo.title,
                    'description': todo.description,
                    'priority': todo.priority,
                    'completed': todo.completed
                })

            return {'todos': todos_list}
        except Exception as e:
            abort(500, message=f"Internal Server Error {e}")

    def post(self):
        try:
            data = {
                'title': request.form.get('title'),
                'description': request.form.get('description'),
                'priority': int(request.form.get('priority')),
                'completed': bool(request.form.get('completed'))
            }

            print('data', data)

            new_todo = Todo(**data)
            db.session.add(new_todo)
            db.session.commit()

            created_todo = {
                'id': new_todo.id,
                'title': new_todo.title,
                'description': new_todo.description,
                'priority': new_todo.priority,
                'completed': new_todo.completed
            }

            return {'New Todo': created_todo}

        except Exception as e:
            return {'response': f'Internal Server Error {e}'}, 500


todo_api.add_resource(TodoLC, '/api/v1/todo')
todo_api.add_resource(TodoRUD, '/api/v1/todo/<int:id>')

db.init_app(todo_app)


@todo_app.before_first_request
def initiate_data_base_tables():
    db.create_all()


todo_app.run(debug=True)
