"""Crea vista 'profile'."""
from flask import jsonify
from app.utils.get_restaurant_data import get_restaurant_data
from . import profile


@profile.get('/restaurant/<email>')
def restaurant(email: str):
    "Retorna datos del resturante."
    formatted_restaurant_info = get_restaurant_data(email)
    return jsonify(formatted_restaurant_info)
