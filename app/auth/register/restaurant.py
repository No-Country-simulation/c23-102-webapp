"""Crea vista 'register_restaurant'."""
from os.path import join
from flask import current_app, request, abort
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from app.db import get_db
from app.utils import allowed_file
from . import register


@register.post('/restaurant')
def register_restaurant():
    """Registra nuevo restaurant en base de datos."""
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


def save_file(file: FileStorage) -> str | None:
    """Guarda archivo en static/."""
    allowed_extensions = ['jpg', 'png', 'jpeg']
    if file.filename == '':
        raise ValueError('Ningún archivo seleccionado.')
    if file.filename and allowed_file(file.filename, allowed_extensions):
        filename = secure_filename(file.filename)
        file.save(join(current_app.config['UPLOAD_FOLDER'], filename))
        return f"static/{filename}"
