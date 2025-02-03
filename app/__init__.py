"Módulo principal"
from os import makedirs
from os.path import abspath, join
from flask import Flask
from app.auth.register import register
from app.categorys import categorys_bp
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
    app.register_blueprint(auth)
    app.register_blueprint(categorys_bp)
    app.register_blueprint(restaurant_bp)
    app.register_blueprint(register)
    app.register_blueprint(profile)
    app.register_blueprint(payments_bp)
    app.register_blueprint(menu)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directorio '/instance/' ya existe.")

    return app
