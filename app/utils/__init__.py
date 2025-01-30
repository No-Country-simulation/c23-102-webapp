"""Almacena funciones puras"""
from os import makedirs
from os.path import abspath, join
from typing import List

from flask import current_app
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename


def allowed_file(filename: str, allowed_extensions: List[str]):
    """Verifica que el tipo de un archivo sea el esperado.

    Examples
    ________
    >>> allowed_file('messi.png', ['png'])
    True
    """
    file_extension = filename.rsplit('.', 1)[1].lower()
    return '.' in filename and file_extension in allowed_extensions


def save_image(image: FileStorage):
    """Guarda archivo en static/ y retorna path."""
    create_directory("static")
    allowed_extensions = ['jpg', 'png', 'jpeg']
    if not image.filename:
        raise ValueError('Ningún archivo enviado.')
    if image.filename and allowed_file(image.filename, allowed_extensions):
        filename = secure_filename(image.filename)
        image.save(join(current_app.config['UPLOAD_FOLDER'], filename))
        return f"static/{filename}"


def create_directory(directory_relative_path: str):
    """Crea directorio a partir de la ruta relativa."""
    try:
        makedirs(abspath(directory_relative_path))
    except OSError:
        print(f"Directorio '{directory_relative_path}' ya existe.")


def register_to_dict(register):
    """Convierte en un diccionario el registro que se le pase."""
    register_dict = dict(register) if register else {}

    return register_dict


def registers_to_list(registers):
    """Convierte todos los registros, en una sola lista."""
    # Recorre todos los registros, todos sus valores y los ingresa en una lista
    registers_list = [dict(register) for register in list(registers)]

    return registers_list
