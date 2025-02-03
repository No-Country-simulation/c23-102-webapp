"""Crea add_menu endpoint."""
from flask import request
from app.db import get_db
from app.utils import save_image
from . import menu


@menu.post('/add/<restaurant_email>')
def add_menu(restaurant_email: str):
    """Crea un nuevo menú en base de datos."""
    db = get_db()
    form = request.form
    image = request.files['image']
    image_path = save_image(image)
    is_active = 1
    query = """
        INSERT INTO Menu 
        (Title, Description, Restaurant_Email, Image_Path, Is_Active)
        VALUES  (?, ?, ?, ?, ?)
    """

    db.execute(query, (form['title'], form['description'], restaurant_email,
                       image_path, is_active))

    return "Datos guardados."
