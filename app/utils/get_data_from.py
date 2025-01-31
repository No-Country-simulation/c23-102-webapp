"Crea utilidad get_restaurant_data"
from flask import abort
from app.db import get_db
from app.utils import register_to_dict


def get_data_from(email: str, role: str):
    """Recibe email y role para poder retornar todos los datos almacenados del restaurante, o cliente."""
    db = get_db()
    formatted_data = None
    query = None

    if role == 'Restaurante':
        query = "SELECT * FROM Restaurant WHERE Email = ?"
    else:
        query = "SELECT * FROM Client WHERE Email = ?"

    data = db.execute(query, (email,)).fetchone()
    formatted_data = register_to_dict(data)

    if not formatted_data:
        abort(400, f"No existe un restaurante vinculado a {email}")

    return formatted_data
