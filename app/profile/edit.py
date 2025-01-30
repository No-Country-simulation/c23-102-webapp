"""Crea edit endponit."""
from logging import error
from flask import abort, jsonify, request

from app.db import get_db
from app.utils import save_image
from app.utils.get_restaurant_data import get_restaurant_data
from app.utils.get_user_data import get_user_data
from . import profile


@profile.put('/edit/<email>')
def edit(email: str):
    """Edita datos del cliente, o restaurante, en base de datos."""
    data = request.get_json()
    user_data = get_user_data(email)
    db = get_db()

    if user_data['Role_Name'] == 'Restaurante':
        restaurant_data = get_restaurant_data(email)
        query = """
        UPDATE Restaurant
        SET Opening_Hour = ?,
        Closing_Hour = ?,
        Description = ?,
        Location = ?,
        Location_Name = ?,
        Brand = ?,
        Category_Name = ?,
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
                               location, location_name, brand, category_name))
        except Exception as e:
            error_message = str(e)
            print(error_message)
        else:
            update_data = get_restaurant_data(email)
            return jsonify(update_data)
    return 400
