"Módulo principal"
from os import makedirs
from os.path import abspath, join
from flask import Flask
from app.auth.register import register
from app.categorys import categorys_bp
from .dish import dish
from .menu import menu
from .profile import profile
from .auth import auth
from .restaurant import restaurant_bp
from .db import close_db
from .commands import init_db_command
from .payments import payments_bp


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    # Carga configuraciones
    app.config.from_mapping(
        DATABASE=join(app.instance_path, 'db.sqlite'),
        SECRET_KEY='posdfjasdhf',
        UPLOAD_FOLDER=abspath("static")
    )

    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

    # Blueprints
    blueprints = [auth, categorys_bp, restaurant_bp,
                  register, profile, payments_bp, menu, dish]
    for blueprint in blueprints:
        app.register_blueprint(blueprint)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directorio '/instance/' ya existe.")

    return app
