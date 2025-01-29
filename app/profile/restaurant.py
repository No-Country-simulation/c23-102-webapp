"""Crea vista 'profile'."""
from flask import jsonify
from app.db import get_db
from app.utils import register_to_dict
from . import profile


@profile.get('/restaurant/<email>')
def restaurant(email: str):
    """Recibe email del restaurante y retorna todos sus datos almacenados."""
    db = get_db()

    # try:
    restaurant_info = db.execute(
        "SELECT * FROM Restaurant WHERE Email = ?", (email,)).fetchone()

    formatted_restaurant_info = register_to_dict(restaurant_info)

    return jsonify(formatted_restaurant_info)
