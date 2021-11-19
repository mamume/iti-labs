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


todo_app.run(DEBUG=True)
