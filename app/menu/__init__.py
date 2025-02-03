"""Crea menu blueprint."""
from flask import Blueprint

menu = Blueprint('menu', __name__, url_prefix='/menu')

from . import add, get
