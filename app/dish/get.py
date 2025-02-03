"""Crea get_dish vista."""
from app.db import get_db
from app.utils import register_to_dict
from . import dish


@dish.get('/get/<price_id>')
def get_dish(price_id: str):
    """Recupera platillo de base de datos y retorna."""
    db = get_db()

    query = "SELECT * FROM Dish WHERE Price_ID = ?"

    data = db.execute(query, (price_id,)).fetchone()
    formatted_data = register_to_dict(data)

    return formatted_data
