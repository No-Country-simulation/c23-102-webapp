"""Almacena funciones puras"""
from os import makedirs
from os.path import abspath
from typing import List


def allowed_file(filename: str, allowed_extensions: List[str]):
    """Verifica que el tipo de un archivo sea el esperado.

    Examples
    ________
    >>> allowed_file('messi.png', ['png'])
    True
    """
    file_extension = filename.rsplit('.', 1)[1].lower()
    return '.' in filename and file_extension in allowed_extensions


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
    registers_list = [value for register in registers for value in register]

    return registers_list
