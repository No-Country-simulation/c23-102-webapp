"""Crea Blueprint y endpoint categorys."""
from flask import Blueprint


categorys = Blueprint('categorys', __name__, url_prefix='/categorys')

categorys.get('/')
