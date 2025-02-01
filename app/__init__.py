from os import makedirs
from os.path import abspath, join
from flask import Flask, jsonify
from app.auth.register import register
from app.categorys import categorys_bp
from .profile import profile
from .auth import auth
from .restaurant import restaurant_bp
from .db import close_db, init_db_command, get_db
from .payments import payments_bp

def create_app():
    "Crea y configura la aplicación"

    app = Flask(__name__, instance_relative_config=True)

    # Carga configuraciones
    app.config.from_mapping(
        DATABASE=join(app.instance_path, 'db.sqlite'),
        SECRET_KEY='posdfjasdhf',
        UPLOAD_FOLDER=abspath("static")
    )

    # Configuración de cierre de base de datos
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

    # Blueprints
    app.register_blueprint(auth)
    app.register_blueprint(categorys_bp)
    app.register_blueprint(restaurant_bp)
    app.register_blueprint(register)
    app.register_blueprint(profile)
    app.register_blueprint(payments_bp)

    # Intentar crear el directorio de instancia si no existe
    try:
        makedirs(app.instance_path)
    except OSError:
        print("Directorio '/instance/' ya existe.")

    # Verificación de la conexión a la base de datos al arrancar la aplicación
    @app.route('/test-db', methods=['GET'])
    def test_db_connection():
        db = get_db()
        try:
            # Realiza una consulta simple para verificar la conexión
            result = db.execute('SELECT 1').fetchone()
            return jsonify({"message": "Conexión exitosa a la base de datos", "result": result[0]}), 200
        except Exception as e:
            return jsonify({"error": "No se pudo conectar a la base de datos", "details": str(e)}), 500
    

    return app

# Crear la aplicación
app = create_app()



# Arrancar el servidor de desarrollo solo si es el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
