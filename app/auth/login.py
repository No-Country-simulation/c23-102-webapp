"""Crea vista login"""
from flask import session, request, redirect, url_for, abort
from werkzeug.security import check_password_hash
from app.db import get_db
from . import auth


@auth.route('/login', methods=('GET', 'POST'))
def login():
    """Verifica datos enviados y redirije, si todo está bien."""
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        db = get_db()
        error = None
        user = db.execute(
            'SELECT * FROM User WHERE Email = ?', (email)
        ).fetchone()

        if email is None or user['Email']:
            error = 'Email incorrecto.'
        # Está función convierte el segundo parámetro en hash y lo compara con el primero
        elif not check_password_hash(user['password'], password):
            error = 'Contraseña incorrecta.'

        if error is not None:
            abort(401, error)

        session.clear()
        session['user_id'] = user['User_ID']
        return redirect(url_for('index'))
