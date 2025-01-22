"Comandos personalizados"
from click import command, echo
from app.db import init_db


@command('init-db')
def init_db_command():
    "Crea base de datos."
    init_db()
    echo('Base de datos y conexión creada.')
