"""Crea dish Blueprint."""
from flask import Blueprint


dish = Blueprint('dish', __name__, url_prefix='/dish')


from . import add, get
