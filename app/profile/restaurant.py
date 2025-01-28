"""Crea vista 'profile'."""
from . import profile


@profile.get('/restaurant/<str:email>')
def restaurant(email: str):
    """Recibe email del restaurante y retorna todos sus datos almacenados."""
    return ""
