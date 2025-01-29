"""Crea vista 'profile'."""
from flask import jsonify
from app.db import get_db
from app.utils import format_restaurant_info
from . import profile


@profile.get('/restaurant/<email>')
def restaurant(email: str):
    """Recibe email del restaurante y retorna todos sus datos almacenados."""
    db = get_db()

    # try:
    restaurant_info = db.execute(
        "SELECT * FROM Restaurant WHERE Email = ?", (email,)).fetchone()

    formatted_restaurant_info = format_restaurant_info(restaurant_info)

    return jsonify(formatted_restaurant_info)
