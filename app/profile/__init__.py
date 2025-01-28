"""Crea Blueprint profile e importa todas las vistas."""
from flask import Blueprint


profile = Blueprint('profile', __name__, url_prefix='/profile')


from . import restaurant
