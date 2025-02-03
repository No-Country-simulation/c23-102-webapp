"""Crea add_dish vista."""
from flask import request
from app.db import get_db
from app.utils import save_image
from . import dish


@dish.post('/add/<menu_id>')
def add_dish(menu_id: str):
    """Guarda nuevo plato en base de datos."""
    db = get_db()
    form = request.form
    image = request.files['image']
    image_path = save_image(image)

    query = """
    INSERT INTO Dish 
    (Price_ID, Image_Path, Name, Description, Price, Menu_ID, Is_Active)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    """

    db.execute(query, (form['priceId'], image_path, form['name'],
               form['description'], form['price'], menu_id, 1))
    db.commit()

    return "Datos guardados."
