"""Inicializa Blueprint 'auth'"""
from flask import Blueprint

auth = Blueprint('auth', __name__)

from . import register # Debe importarse luego de la creación del Blueprint
