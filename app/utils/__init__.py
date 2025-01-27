"""Almacena funciones puras"""


def allowed_file(filename, allowed_extensions):
    """Verifica que el tipo de un archivo sea el esperado."""
    file_extension = filename.rsplit('.', 1)[1].lower()
    return '.' in filename and file_extension in allowed_extensions
