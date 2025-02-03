"""Crea vista 'register_client'."""
from flask import request, abort
from app.db import get_db
from app.utils import save_image
from . import register


@register.post('/client')
def register_client():
    """Registra nuevo client en base de datos."""
    form = request.form
    photo = request.files['photo']

    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO Client (Email, Location, Postal_Code, Photo_Path)
            VALUES (?, ?, ?, ?)
            """,
            (form['email'], form['location'],
             form['postalCode'], save_image(photo))
        ).fetchone()
    except db.IntegrityError:
        db.rollback()
        abort(401, f"Cliente ya registrado con {form['email']}.")
    else:
        db.commit()
        return form
