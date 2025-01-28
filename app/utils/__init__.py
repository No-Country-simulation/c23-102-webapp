"""Almacena funciones puras"""
from os import makedirs
from os.path import abspath
from typing import List


def allowed_file(filename: str, allowed_extensions: List[str]):
    """Verifica que el tipo de un archivo sea el esperado.

    Examples
    ________
    >>> allowed_file('messi.png', ['png'])
    True
    """
    file_extension = filename.rsplit('.', 1)[1].lower()
    return '.' in filename and file_extension in allowed_extensions


def create_directory(directory_relative_path: str):
    """Crea directorio a partir de la ruta relativa."""
    try:
        makedirs(abspath(directory_relative_path))
    except OSError:
        print(f"Directorio '{directory_relative_path}' ya existe.")


def format_restaurant_info(restaurant_info):
    """Convierte en un diccionario los registros de la tabla 'Restaurant'."""
    restaurant_info_formatted = {
        'category': restaurant_info['category'],
        'openingHour': restaurant_info['opening_hour'],
        'closingHour': restaurant_info['closing_hour'],
        'description': restaurant_info['description'],
        'location': restaurant_info['location'],
        'brand': restaurant_info['brand'],
        'locationName': restaurant_info['location_name'],
        'banner_url': restaurant_info['banner_url']
    }

    return restaurant_info_formatted
