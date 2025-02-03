"""Crea get_dish vista."""
from . import dish


@dish.get('/get/<price_id>')
def get_dish(price_id: str):
    """Recupera platillo de base de datos y retorna."""
