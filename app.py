from re import DEBUG
from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging

logging.basicConfig(filename='flask.logs')

todo_app = Flask(__name__)


@todo_app.route('/hello/', methods=['GET', 'POST'])
def hello():
    return "hello"


todo_app.run(DEBUG=True)
