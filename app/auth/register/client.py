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
            INSERT INTO Restaurant (Brand, Location, Location_Name, Category_Name, Email)
            VALUES (?, ?, ?, ?, ?)
            """,
            (form['brand'], form['location'],
             form['locationName'], form['category'], form['email'])
        ).fetchone()
        db.commit()
    except db.IntegrityError:
        abort(401, f"Restaurante ya registrado con {form['email']}.")
    else:
        return form
