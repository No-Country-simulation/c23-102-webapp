"""Crea history endpoint."""
from app.db import get_db
from app.utils import registers_to_list
from . import payments_bp


@payments_bp.post('/history/<email>')
def history(email: str):
    """Recupera historial de pagos relacionados con el parámetro pasado (email)."""
    db = get_db()
    query = """SELECT * FROM Payment WHERE Restaurante_Email = ? OR Client_Email = ?"""

    data = db.execute(query, (email, email)).fetchall()
    data_formatted = registers_to_list(data)
    print(data_formatted)

    return data_formatted
