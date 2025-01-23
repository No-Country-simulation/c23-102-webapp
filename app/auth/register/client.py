"""Crea vista 'register_client'."""
from flask import request, abort
from app.db import get_db
from . import register


@register.post('/client')
def register_client():
    """Registra nuevo client en base de datos."""
    form = request.form
    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO Client (Email, Location, Complete_Name, City)
            VALUES (?, ?, ?, ?)
            """,
            (form['email'], form['location'],
             form['completeName'], form['city'])
        ).fetchone()
        db.commit()
    except db.IntegrityError:
        abort(401, f"Cliente ya registrado con {form['email']}.")
    else:
        return form
