"""Create get_menu endpoint."""
from flask import abort
from app.db import get_db
from app.utils import register_to_dict
from . import menu


@menu.get('/<menu_id>')
def get_menu(menu_id: int):
    """Obtiene todos los datos del menú vinculado con el id pasado."""
    db = get_db()
    query = "SELECT * From Menu WHERE Menu_ID = ?"

    data = db.execute(query, (menu_id,)).fetchone()

    if data:
        abort(400, "No se encontró un menú con ese id.")

    formatted_data = register_to_dict(data)
    return formatted_data
