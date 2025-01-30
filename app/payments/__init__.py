"""Crea payments Blueprint."""
from flask import Blueprint

payments_bp = Blueprint('payments', __name__, url_prefix='/payments')

from . import create_checkout_session, history
