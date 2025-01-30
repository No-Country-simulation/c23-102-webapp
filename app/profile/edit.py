"""Crea edit endponit."""
from flask import request
from . import profile


@profile.put('/edit/<email>')
def edit(email: str):
    """Edita datos del cliente, o restaurante, en base de datos."""
    data = request.get_json()
