"""Crea menu blueprint."""
from flask import Blueprint

menu = Blueprint('menu', __name__, '/menu')

from . import add, get
