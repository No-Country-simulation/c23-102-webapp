"""Crea add_dish vista."""
from . import dish


@dish.post('/add/<menu_id>')
def add_dish(menu_id: str):
    """Guarda nuevo plato en base de datos."""
