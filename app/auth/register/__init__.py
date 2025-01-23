"""Crea vista register"""
from flask import Blueprint, abort, request
from werkzeug.security import generate_password_hash
from app.db import get_db

register = Blueprint('register', __name__, url_prefix='/register')


@register.post('/')
def user_register():
    """Registra usuario en basa de datos."""
    form = request.form
    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO User (Email, Password, Lastname, Firstname, Phone)
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


from . import restaurant, client
