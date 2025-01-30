# Crea get_user_data util.
from app.db import get_db
from app.utils import register_to_dict


def get_user_data(email: str):
    """Obtiene datos del usuario por su email, y los retorna."""
    db = get_db()
    data = db.execute("SELECT * FROM User WHERE Email = ?",
                      (email,)).fetchone()
    data_formatted = register_to_dict(data)

    return data_formatted
