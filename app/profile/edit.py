"""Crea edit endponit."""
from flask import request

from app.db import get_db
from app.utils.get_data_from import get_data_from
from app.utils.get_user_data import get_user_data
from . import profile


def update_restaurant(email, data):
    """Actualiza y retorna datos de restaurante en base de datos."""
    db = get_db()
    role = 'Restaurante'

    restaurant_data = get_data_from(email, role)
    query = """
    UPDATE Restaurant
    SET Opening_Hour = ?,
    Closing_Hour = ?,
    Description = ?,
    Location = ?,
    Location_Name = ?,
    Brand = ?,
    Category_Name = ?
    WHERE Email = ?
    """

    opening_hour = data.get('openingHour', restaurant_data['Opening_Hour'])
    closing_hour = data.get('closingHour', restaurant_data['Closing_Hour'])
    description = data.get('description', restaurant_data['Description'])
    location = data.get('location', restaurant_data['Location'])
    location_name = data.get(
        'locationName', restaurant_data['Location_Name'])
    brand = data.get('brand', restaurant_data['Brand'])
    category_name = data.get(
        'categoryName', restaurant_data['Category_Name'])

    try:
        db.execute(query, (opening_hour, closing_hour, description,
                           location, location_name, brand, category_name, email))
    except Exception as e:
        error_message = str(e)
        print(error_message)
    else:
        update_data = get_data_from(email, role)
        return update_data


def update_client(email, data):
    """Actualiza y retorna datos de restaurante en base de datos."""
    db = get_db()
    role = 'Cliente'

    client_data = get_data_from(email, role)
    query = """
    UPDATE Client
    SET Location = ?,
    Postal_Code = ?
    WHERE Email = ?
    """

    location = data.get('location', client_data['Location'])
    postal_code = data.get('postalCode', client_data['Postal_Code'])

    try:
        db.execute(query, (location, postal_code, email))
    except Exception as e:
        error_message = str(e)
        print(error_message)
    else:
        update_data = get_data_from(email, role)
        return update_data


@profile.put('/edit/<email>')
def edit(email: str):
    """Edita datos del cliente, o restaurante, en base de datos."""
    data = request.get_json()
    user_data = get_user_data(email)

    if user_data['Role_Name'] == 'Restaurante':
        updated_data = update_restaurant(email, data)

        return updated_data

    update_data = update_client(email, data)
    print(update_data)
    return update_data
