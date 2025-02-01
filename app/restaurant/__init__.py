from flask import Blueprint

# Crear el Blueprint aquí
restaurant_bp = Blueprint('restaurant', __name__, url_prefix='/api')

# Importar las rutas en este archivo para evitar la importación circular
from .restaurant_routes import *
