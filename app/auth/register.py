"""Crea vista register"""
from flask import abort, request, url_for, redirect
from werkzeug.security import generate_password_hash
from app.db import get_db
from . import auth


@auth.post('/register')
def register():
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
        return {'email': form['email']}  # Agregar redirección a home
