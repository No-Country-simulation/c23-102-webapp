"""Crea Blueprint profile e importa todas las vistas."""
from . import restaurant
from flask import Blueprint


profile = Blueprint('profile', __name__, url_prefix='/profile')
