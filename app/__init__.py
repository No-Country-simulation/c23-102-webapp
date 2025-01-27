"Módulo principal"
from os import makedirs
from os.path import abspath, join
from flask import Flask
from app.auth.register import register
from .auth import auth
from .restaurant import restaurant_bp


def create_app():
    "Crea y configura aplicación"

    app = Flask(__name__, instance_relative_config=True)

    # Carga configuraciones
    app.config.from_mapping(
        DATABASE=join(app.instance_path, 'db.sqlite'),
        SECRET_KEY='posdfjasdhf',
        UPLOAD_FOLDER=abspath("static")
    )

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(restaurant_bp)
    app.register_blueprint(register)

    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directorio '/instance/' ya existe.")

    return app
