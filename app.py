from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging
from models import db, Todo

logging.basicConfig(filename='flask.logs')

todo_app = Flask(__name__)
todo_app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
todo_api = Api(todo_app)


class TodoRUD(Resource):
    def get(selr, **kwargs):
        todo_id = kwargs.get('todo_id')
        task = Todo.query.get(todo_id)

        if not task:
            abort(404, message='Not Found')

        data = {
            'id': task.id,
            'name': task.name,
            'priority': task.priority,
            'description': task.description,
            'finished': task.finished
        }

        return data, 200


todo_app.run(DEBUG=True)
