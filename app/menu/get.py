"""Create get_menu endpoint."""
from app.db import get_db
from . import menu


@menu.get('/<menu_id>')
def get_menu(menu_id: int):
    """Obtiene todos los datos del menú vinculado con el id pasado."""
    db = get_db()
