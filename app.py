from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging
from models import db, Todo

logging.basicConfig(filename='flask.logs')

todo_app = Flask(__name__)
todo_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
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
            abort(404, message="id is not found")

        db.session.delete(todo)
        db.session.commit()

        return {'response': f'todo with id={id} is deleted successfully'}


class TodoLC(Resource):
    def get(self):
        try:
            todos = Todo.query.all()
            print(todos)
        except Exception:
            abort(500, message=f"Internal Server Error {Exception}")


todo_api.add_resource(TodoLC, '/api/v1/todo')
todo_api.add_resource(TodoRUD, '/api/v1/todo/<int:id>')

db.init_app(todo_app)


@todo_app.before_first_request
def initiate_data_base_tables():
    db.create_all()


todo_app.run(debug=True)
