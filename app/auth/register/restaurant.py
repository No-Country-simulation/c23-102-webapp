"""Crea vista 'register_restaurant'."""
from flask import request, abort
from app.db import get_db
from app.utils import register_to_dict, save_image
from app.utils.get_data_from import get_data_from
from . import register


@register.post('/restaurant')
def register_restaurant():
    """Registra nuevo restaurant en base de datos."""
    form = request.form
    banner_file = request.files['banner']
    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO Restaurant (Brand, Location, Location_Name, Category_Name, Email, Banner_Url, Description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (form['brand'], form['location'],
             form['locationName'], form['category'], form['email'], save_image(
                 banner_file), form['description'])
        ).fetchone()
        db.commit()
    except db.IntegrityError:
        abort(401, f"Restaurante ya registrado con {form['email']}.")
    except ValueError as error:
        error_message = str(error)
        abort(401, error_message)
    else:
        register = get_data_from(form['email'], 'Restaurante')
        data_formatted = register_to_dict(register)
        return data_formatted
