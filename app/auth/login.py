"""Crea vista login"""
from flask import session, request, redirect, url_for
from werkzeug.security import check_password_hash
from app import auth
from app.db import get_db


@auth.route('/login', methods=('GET', 'POST'))
def login():
    """Verifica datos enviados y redirije, si todo está bien."""
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        db = get_db()
        error = None
        user = db.execute(
            'SELECT * FROM Client, Restaurant WHERE Email = ?', (email)
        ).fetchone()

        if user is None:
            error = 'Incorrect username.'
        elif not check_password_hash(user['password'], password):
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['user_id'] = user['id']
            return redirect(url_for('index'))

    return "Usuario creado."
