"""Crea vista 'profile'."""
from flask import jsonify

from app.utils.get_data_from import get_data_from
from . import profile


@profile.get('/restaurant/<email>')
def restaurant(email: str):
    "Retorna datos del resturante."
    formatted_restaurant_info = get_data_from(email, 'Restaurante')
    return jsonify(formatted_restaurant_info)
