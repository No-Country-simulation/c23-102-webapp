"""Crea edit endponit."""
from flask import request

from app.utils import save_image
from app.utils.get_restaurant_data import get_restaurant_data
from app.utils.get_user_data import get_user_data
from . import profile


@profile.put('/edit/<email>')
def edit(email: str):
    """Edita datos del cliente, o restaurante, en base de datos."""
    data = request.get_json()
    user_data = get_user_data(email)
    banner = request.files['banner']

    if user_data['Role'] == 'Restaurante':
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
        Banner_Url = ?
        WHERE Email = ?
        """
        opening_hour = data.get('openingHour', restaurant_data['opening_hour'])
        closing_hour = data.get('closingHour', restaurant_data['closing_hour'])
        description = data.get('description', restaurant_data['description'])
        location = data.get('location', restaurant_data['location'])
        location_name = data.get(
            'locationName', restaurant_data['location_name'])
        brand = data.get('brand', restaurant_data['brand'])
        category_name = data.get(
            'categoryName', restaurant_data['category_name'])
        banner_url = data.get(save_image(
            banner), restaurant_data['banner_url'])
