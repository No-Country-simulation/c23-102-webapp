"Comandos personalizados"
from click import command, echo
from app.db import init_db


@command('init-db')
def init_db_command():
    "Elimina todos los datos y crea nuevas tablas"
    init_db()
    echo('Base de datos y conexión creada')
