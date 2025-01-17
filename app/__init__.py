"Módulo principal"
from os import makedirs
from flask import Flask


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    @app.route('/')
    def hello():
        return 'Hello, World!'
