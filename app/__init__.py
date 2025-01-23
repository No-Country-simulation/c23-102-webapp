"Módulo principal"
from os import makedirs
from os.path import join
from flask import Flask
from app.auth.register import register
from app.commands import init_db_command
from app.db import close_db
from .auth import auth
from .restaurant import restaurant_bp


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    # Carga configuraciones
    app.config.from_mapping(
        DATABASE=join(app.instance_path, 'db.sqlite'),
        WTF_CSRF_ENABLED=False,
        SECRET_KEY='posdfjasdhf'
    )

    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(restaurant_bp)
    app.register_blueprint(register)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directory already exists")

    return app
