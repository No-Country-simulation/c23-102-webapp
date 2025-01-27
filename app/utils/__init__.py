"""Almacena funciones puras"""


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
