"""Crea Blueprint y endpoint categorys."""
from flask import Blueprint, jsonify
from app.db import get_db
from app.utils import registers_to_list


categorys_bp = Blueprint('categorys', __name__, url_prefix='/categorys')


@categorys_bp.get('/')
def categorys():
    """Recupera lista de categorias de la base de datos y retorna."""
    db = get_db()

    # try:
    registers = db.execute("SELECT * FROM Category").fetchall()

    registers_list = registers_to_list(registers)

    return jsonify(registers_list)
