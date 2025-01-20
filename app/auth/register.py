"Crea y configura view register."
from flask import (
    flash, redirect, render_template, request, url_for
)
from werkzeug.security import generate_password_hash
from app.db import get_db
from . import auth


@auth.route('/register', methods=('GET', 'POST'))
def register():
    "Crea ruta /register."
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        error = None

        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'

        if error is None:
            try:
                db.execute(
                    "INSERT INTO user (username, password) VALUES (?, ?)",
                    (username, generate_password_hash(password)),
                )
                db.commit()
            except db.IntegrityError:
                error = f"User {username} is already registered."
            else:
                return redirect(url_for("auth.login"))

        flash(error)

    return render_template('auth/register.html')
