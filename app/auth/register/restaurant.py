"""Crea vista 'register_restaurant'."""
from flask import request, abort
from werkzeug.security import generate_password_hash
from app.db import get_db
from . import register


@register.post('/restaurant')
def register_restaurant():
    """Registra nuevo restaurant en base de datos."""
    form = request.form
    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO Restaurant (Brand, Location, Location_Name, Category, Phone)
            VALUES (?, ?, ?, ?, ?)
            """,
            (form['email'], generate_password_hash(form['password']),
                form['lastname'], form['name'], form['phone']),
        )
        db.commit()
    except db.IntegrityError:
        abort(401, f"Usuario ya registrado con {form['email']}.")
    else:
        return {'email': form['email']}
