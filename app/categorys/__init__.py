"""Crea Blueprint y endpoint categorys."""
from flask import Blueprint
from app.db import get_db


categorys_bp = Blueprint('categorys', __name__, url_prefix='/categorys')


@categorys_bp.get('/')
def categorys():
    """Recupera lista de categorias de la base de datos y retorna."""
    db = get_db()

    # try:
    category_registers = db.execute("SELECT * FROM Category")

    formatted_restaurant_info = format_restaurant_info(restaurant_info)

    return jsonify(formatted_restaurant_info)
