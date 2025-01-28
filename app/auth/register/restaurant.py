"""Crea vista 'register_restaurant'."""
from os.path import join
from flask import current_app, request, abort
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from app.db import get_db
from app.utils import allowed_file, create_directory
from . import register


async def save_file(file: FileStorage):
    """Guarda archivo en static/ y retorna path."""
    await create_directory("static")
    allowed_extensions = ['jpg', 'png', 'jpeg']
    if not file.filename:
        raise ValueError('Ningún archivo enviado.')
    if file.filename and allowed_file(file.filename, allowed_extensions):
        filename = secure_filename(file.filename)
        file.save(join(current_app.config['UPLOAD_FOLDER'], filename))
        return f"static/{filename}"


@register.post('/restaurant')
async def register_restaurant():
    """Registra nuevo restaurant en base de datos."""
    form = request.form
    banner_file = request.files['banner']
    db = get_db()
    try:
        db.execute(
            """
            INSERT INTO Restaurant (Brand, Location, Location_Name, Category_Name, Email, Banner_Url)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (form['brand'], form['location'],
             form['locationName'], form['category'], form['email'], await save_file(
                 banner_file))
        ).fetchone()
        db.commit()
    except db.IntegrityError:
        abort(401, f"Restaurante ya registrado con {form['email']}.")
    except ValueError as error:
        error_message = str(error)
        abort(401, error_message)
    else:
        return form
