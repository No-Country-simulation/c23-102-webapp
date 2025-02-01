import click
from sqlite3 import connect, PARSE_DECLTYPES, Row, register_converter
from flask import current_app, g
from datetime import datetime
import os


def get_db():
    """Crea conexión, almacena en g.db y la retorna."""
    if 'db' not in g:
        g.db = connect(
            current_app.config['DATABASE'], detect_types=PARSE_DECLTYPES)
        g.db.row_factory = Row
    return g.db

def close_db(exc=None):
    """Cierra conexión a base de datos."""
    db = g.pop('db', None)
    if db is not None:
        db.close()

def init_db():
    """Ejecuta código SQL para crear base de datos."""
    schema_path = os.path.join(current_app.root_path, 'schema.sql')
    if not os.path.exists(schema_path):
        print("Error: schema.sql no encontrado.")
        return
    
    db = get_db()
    with current_app.open_resource('schema.sql') as schema:
        db.executescript(schema.read().decode('utf8'))

# Crea función que convierte tipo timestamp a datetime
register_converter(
    "timestamp", lambda val: datetime.fromisoformat(val.decode() if isinstance(val, bytes) else val)
)

@click.command('init-db')
def init_db_command():
    """Crea la base de datos."""
    init_db()
    click.echo('Base de datos inicializada.')

def init_app(app):
    """Registra las funciones de cierre de conexión y creación de la base de datos."""
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)
