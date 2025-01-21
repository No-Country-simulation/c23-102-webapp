"""Crea vista register"""
from flask import abort, url_for, redirect
from werkzeug.security import generate_password_hash
from app.auth.register_form import RegisterForm
from app.db import get_db
from . import auth


@auth.post('/register')
def register():
    """Valida datos del usuario y los guarda en basa de datos."""
    form = RegisterForm()
    db = get_db()
    if form.validate_on_submit():
        try:
            db.execute(
                """
                INSERT INTO User (Email, Password, Lastname, Firstname, Phone)
                VALUES (?, ?, ?, ?, ?)
                """,
                (form.email, generate_password_hash(form.password),
                 form.lastname, form.name, form.phone),
            )
            db.commit()
        except db.IntegrityError:
            abort(401, f"Usuario ya registrado con {form.email}.")
        else:
            return redirect(url_for(""))  # Agregar redirección a home
    abort(401, form.errors)
