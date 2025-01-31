"""Crea vista 'profile'."""
from app.utils.get_data_from import get_data_from
from app.utils.get_user_data import get_user_data
from . import profile


@profile.get('/<email>')
def get_profile(email: str):
    "Retorna datos del perfil asociado con el email."
    user_data = get_user_data(email)
    user_role = user_data['Role_Name']

    data = get_data_from(email, user_role)
    return data
