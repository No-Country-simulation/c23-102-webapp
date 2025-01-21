"""Crea vista register"""
from flask import abort, request, url_for, redirect
from werkzeug.security import generate_password_hash
from app.db import get_db
from . import auth


@auth.post('/register')
def register():
    """Valida datos del usuario y los guarda en basa de datos."""
    email = request.form['email']
    password = request.form['password']
    firstname = request.form['name']
    lastname = request.form['lastname']
    phone = request.form['phone']
    db = get_db()
    error = None

    if not email:
        error = 'Email requerido.'
    elif not password:
        error = 'Contraseña requerida.'
    elif not firstname:
        error = 'Nombre requerido.'

    if error is None:
        try:
            db.execute(
                """
                INSERT INTO User (Email, Password, Lastname, Firstname, Phone)
                VALUES (?, ?, ?, ?, ?)
                """,
                (email, generate_password_hash(password), lastname, firstname, phone),
            )
            db.commit()
        except db.IntegrityError:
            error = "Usuario ya registrado."
        else:
            return redirect(url_for(""))  # Agregar redirección a home
    abort(401, error)
