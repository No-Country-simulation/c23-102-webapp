from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.db import db, init_db
from app.models import * # Importa todos los modelos
from app.routes import routes_bp

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    app.register_blueprint(routes_bp)
    return app