"""Crea history endpoint."""
from . import payments_bp


@payments_bp.post('/history/<email>')
def history(email: str):
    """Recupera historial de pagos relacionados con el parámetro pasado (email)."""
