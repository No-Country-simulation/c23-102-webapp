"Módulo principal"
from os import makedirs
from os.path import join
from flask import Flask
from app.commands import init_db_command
from app.db import close_db
from .auth import auth
from .restaurant import app as restaurant


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    app.config['DATABASE'] = join(app.instance_path, 'db.sqlite')
    app.config['WTF_CSRF_ENABLED'] = False
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(restaurant)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directory already exists")

    return app
