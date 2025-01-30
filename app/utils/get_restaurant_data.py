"Crea utilidad get_restaurant_data"
from flask import abort
from app.db import get_db
from app.utils import register_to_dict


def get_restaurant_data(email: str):
    """Recibe email del restaurante y retorna todos sus datos almacenados."""
    db = get_db()
    formatted_restaurant_info = None

    restaurant_info = db.execute(
        "SELECT * FROM Restaurant WHERE Email = ?", (email,)).fetchone()
    formatted_restaurant_info = register_to_dict(restaurant_info)

    if not formatted_restaurant_info:
        abort(400, f"No existe un restaurante vinculado a {email}")

    return formatted_restaurant_info
