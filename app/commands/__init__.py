"Comandos personalizados"
from os.path import exists
from click import command, echo
from flask import current_app
from app.db import init_db


@command('init-db')
def init_db_command():
    "Elimina todos los datos y crea tablas necesarias"
    if not exists(current_app.config['DATABASE']):
        init_db()
        echo('Base de datos y conexión creada.')
    else:
        echo("La base de datos ya fue creada y conectada.")
