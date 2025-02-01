from flask import Flask
from app.restaurant import restaurant_bp  # Importa el Blueprint
from app.db import get_db, close_db, init_db  # Importa las funciones de db

app = Flask(__name__)

# Configura la base de datos
app.config['DATABASE'] = 'path_to_your_database.db'

# Registrar Blueprint
app.register_blueprint(restaurant_bp)

# Conexión a la base de datos utilizando get_db que ahora está en db.py
def get_db_connection():
    return get_db()

# Función para crear tablas si no existen
def create_tables():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Crear tablas si no existen (solo al iniciar la aplicación)
    cursor.execute('''CREATE TABLE IF NOT EXISTS Client (
        Client_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        FirstName TEXT NOT NULL,
        LastName TEXT NOT NULL,
        Email TEXT,
        Password TEXT,
        Phone TEXT,
        Address TEXT,
        Status BOOLEAN)''')
    
    cursor.execute('''CREATE TABLE IF NOT EXISTS Restaurant_Category (
        Category_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL)''')
    
    cursor.execute('''CREATE TABLE IF NOT EXISTS Menu (
        Menu_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL,
        Price DECIMAL(4, 1),
        Description TEXT,
        Availability BOOLEAN)''')
    
    # Aquí seguirías con las demás tablas, como Order, Payment, etc.
    conn.commit()
    conn.close()

# Insertar datos de ejemplo
def init_restaurant_data():
    db = get_db()  # Usar la conexión gestionada por Flask
    cursor = db.cursor()

    # Insertar Categorías de Restaurante si no existen
    cursor.execute("INSERT OR IGNORE INTO Restaurant_Category (Name) VALUES ('Fast Food'), ('Italian'), ('Chinese')")
    
    # Insertar Menú si no existen
    cursor.execute('''INSERT OR IGNORE INTO Menu (Name, Price, Description, Availability)
    VALUES ('Burger', 5.99, 'Delicious beef burger', 1),
           ('Pizza', 8.99, 'Classic Italian pizza', 1),
           ('Noodles', 6.49, 'Chinese noodles', 1)''')

    # Insertar Clientes si no existen
    cursor.execute('''INSERT OR IGNORE INTO Client (FirstName, LastName, Email, Password, Phone, Address, Status)
    VALUES ('John', 'Doe', 'johndoe@example.com', 'password123', '1234567890', '123 Main St', 1),
           ('Jane', 'Smith', 'janesmith@example.com', 'password456', '0987654321', '456 Elm St', 1)''')

    # Insertar restaurantes si no existen
    cursor.execute('''INSERT OR IGNORE INTO Restaurant (Restaurant_ID, Category_ID, Menu_ID, Name, Address, Description, Email, Password, Phone, Opening_Hour, Closing_Hour)
    VALUES ('1', '1', '1', 'Burger Place', '123 Fast Food St', 'Delicious burgers', 'burgerplace@example.com', 'password123', '1234567890', '9', '22')''')
    
    db.commit()
    db.close()

if __name__ == '__main__':
    with app.app_context(): 
        create_tables()
        init_restaurant_data()  # Solo se ejecuta una vez al inicio
    app.run(debug=True)
