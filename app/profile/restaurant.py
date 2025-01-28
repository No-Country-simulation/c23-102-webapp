"""Crea vista 'profile'."""
from app.db import get_db
from . import profile


@profile.get('/restaurant/<email>')
def restaurant(email: str):
    """Recibe email del restaurante y retorna todos sus datos almacenados."""
    db = get_db()

    # try:
    restaurant_info = db.execute(
        "SELECT * FROM Restaurant WHERE Email = ?", (email,))

    return restaurant_info
