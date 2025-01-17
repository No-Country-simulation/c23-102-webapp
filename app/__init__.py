"Módulo principal"
from os import makedirs
from os.path import join
from flask import Flask

from app.db import close_db


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    app.config['DATABASE'] = join(app.instance_path, 'db.sqlite')
    app.teardown_appcontext(close_db)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directory already exists")

    @app.route('/')
    def hello():
        return 'Hello, World!'

    return app
