from flask import Flask, request, jsonify, abort, render_template, flash
from flask_restful import Resource, Api
import logging

logging.basicConfig(filename='flask.logs')