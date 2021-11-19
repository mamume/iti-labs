from re import DEBUG
from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging

logging.basicConfig(filename='flask.logs')

app = Flask(__name__)


@app.route('/hello/', methods=['GET', 'POST'])
def hello():
    return "hello"


app.run(DEBUG=True)
