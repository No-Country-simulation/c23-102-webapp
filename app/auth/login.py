"""Crea vista login"""
from flask import session, request, abort
from werkzeug.security import check_password_hash
from app.db import get_db
from . import auth


@auth.post('/login')
def login():
    """Verifica datos enviados y redirije, si todo está bien."""
    email = request.form['email']
    password: str = request.form['password']
    db = get_db()
    error = None
    user = db.execute(
        'SELECT * FROM User WHERE Email = ?', (email,)
    ).fetchone()

    if user is None:
        error = 'Email incorrecto.'
    # Está función convierte el segundo parámetro en hash y lo compara con el primero
    elif not check_password_hash(user['password'], password):
        error = 'Contraseña incorrecta.'

    if error is not None:
        abort(401, error)

    session.clear()
    session['user_id'] = user['email']
    return {'email': email}
