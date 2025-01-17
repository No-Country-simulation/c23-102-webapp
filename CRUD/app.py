from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
import sqlite3
import re  # Para validaciones

app = Flask(__name__)
app.secret_key = 'your_secret_key'
DATABASE = 'app.db'

# Crear una conexión a la base de datos

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

# Crear tablas si no existen
def create_tables():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE,
            password TEXT
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS restaurants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_restaurant TEXT UNIQUE NOT NULL,
            descripcion_restau TEXT,
            direccion TEXT NOT NULL,
            telefono TEXT NOT NULL,
            correo TEXT UNIQUE NOT NULL,
            estado TEXT DEFAULT 'Abierto'
        )
    ''')
    conn.commit()
    conn.close()

# Decorador para proteger rutas
def login_required(f):
    def wrapper(*args, **kwargs):
        if 'email' not in session:
            flash('Debes iniciar sesión para acceder a esta página.', 'danger')
            return redirect(url_for('inicio_sesion'))
        return f(*args, **kwargs)
    wrapper.__name__ = f.__name__
    return wrapper

@app.route('/')
def index():
    return redirect(url_for('inicio_sesion'))

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        # Validaciones
        if password != confirm_password:
            flash('Las contraseñas no coinciden.', 'danger')
            return redirect(url_for('registro'))
        if not re.match(r'^[^@]+@[^@]+\.[^@]+$', email):
            flash('Formato de correo inválido.', 'danger')
            return redirect(url_for('registro'))

        # Guardar en la base de datos
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('INSERT INTO users (email, password) VALUES (?, ?)', (email, password))
            conn.commit()
            conn.close()
            flash('¡Registro exitoso! Ahora puedes iniciar sesión.', 'success')
            return redirect(url_for('inicio_sesion'))
        except sqlite3.IntegrityError:
            flash('El correo ya está registrado. Por favor, utiliza otro.', 'danger')
    return render_template('registro.html')

@app.route('/inicio-sesion', methods=['GET', 'POST'])
def inicio_sesion():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
        user = cursor.fetchone()
        conn.close()

        if user and user['password'] == password:
            session['email'] = user['email']
            flash('¡Inicio de sesión exitoso!', 'success')
            return redirect(url_for('listar_restaurantes'))
        else:
            flash('Correo o contraseña incorrectos.', 'danger')
    return render_template('inicio_sesion.html')

@app.route('/cerrar-sesion')
def cerrar_sesion():
    session.pop('email', None)
    flash('Sesión cerrada correctamente.', 'success')
    return redirect(url_for('inicio_sesion'))

# Rutas CRUD para restaurantes
@app.route('/restaurantes')
@login_required
def listar_restaurantes():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM restaurants')
    restaurants = cursor.fetchall()
    conn.close()
    return render_template('index.html', restaurants=restaurants)

@app.route('/restaurantes/nuevo', methods=['GET', 'POST'])
@login_required
def nuevo_restaurante():
    if request.method == 'POST':
        nombre_restaurant = request.form['nombre_restaurant']
        descripcion_restau = request.form['descripcion_restau']
        direccion = request.form['direccion']
        telefono = request.form['telefono']
        correo = request.form['correo']

        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO restaurants (nombre_restaurant, descripcion_restau, direccion, telefono, correo)
                VALUES (?, ?, ?, ?, ?)
            ''', (nombre_restaurant, descripcion_restau, direccion, telefono, correo))
            conn.commit()
            conn.close()
            flash('Restaurante agregado con éxito.', 'success')
            return redirect(url_for('listar_restaurantes'))
        except sqlite3.Error as e:
            flash(f'Error al agregar restaurante: {e}', 'danger')
    return render_template('nuevo_restaurante.html')

@app.route('/restaurantes/editar/<int:id>', methods=['GET', 'POST'])
@login_required
def editar_restaurante(id):
    conn = get_db_connection()
    cursor = conn.cursor()

    if request.method == 'POST':
        nombre_restaurant = request.form['nombre_restaurant']
        descripcion_restau = request.form['descripcion_restau']
        direccion = request.form['direccion']
        telefono = request.form['telefono']
        correo = request.form['correo']
        estado = request.form['estado']

        cursor.execute('''
            UPDATE restaurants
            SET nombre_restaurant = ?, descripcion_restau = ?, direccion = ?, telefono = ?, correo = ?, estado = ?
            WHERE id = ?
        ''', (nombre_restaurant, descripcion_restau, direccion, telefono, correo, estado, id))
        conn.commit()
        conn.close()
        flash('Restaurante actualizado con éxito.', 'success')
        return redirect(url_for('listar_restaurantes'))

    cursor.execute('SELECT * FROM restaurants WHERE id = ?', (id,))
    restaurant = cursor.fetchone()
    conn.close()
    return render_template('editar_restaurante.html', restaurant=restaurant)

@app.route('/restaurantes/eliminar/<int:id>', methods=['POST'])
@login_required
def eliminar_restaurante(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM restaurants WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    flash('Restaurante eliminado con éxito.', 'success')
    return redirect(url_for('listar_restaurantes'))

if __name__ == '__main__':
    create_tables()
    app.run(debug=True)
