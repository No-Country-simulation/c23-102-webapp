"Crea y configura base de datos"
from sqlite3 import connect, PARSE_DECLTYPES, Row, register_converter

from flask import current_app, g
from datetime import datetime


def get_db():
    "Crea conexión, almacena en g.db y la retorna"
    if 'db' not in g:
        g.db = connect(
            current_app.config['DATABASE'], detect_types=PARSE_DECLTYPES)
        g.db.row_factory = Row

    return g.db


def close_db(exc: BaseException | None):  # pylint: disable=unused-argument
    "Cierra conexión a base de datos"
    db = g.pop('db', None)

    if db is not None:
        db.close()


def init_db():
    "Ejecuta código SQL para crear base de datos"
    db = get_db()

    with current_app.open_resource('schema.sql') as schema:
        db.executescript(schema.read().decode('utf8'))


# Crea función que convierte tipo timestamp a datetime
register_converter(
    "timestamp", lambda type: datetime.fromisoformat(type.decode()))
