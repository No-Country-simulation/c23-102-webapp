from flask import jsonify, Blueprint
import sqlite3

from app.db import get_db

restaurant_bp = Blueprint('restaurant', __name__, url_prefix='/restaurant')

# Conexión a la base de datos


def get_db_connection():
    conn = get_db()
    conn.row_factory = sqlite3.Row
    return conn

# Crear tablas


def create_tables():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Crear tablas si no existen
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Client (
            Client_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            FirstName TEXT NOT NULL,
            LastName TEXT NOT NULL,
            Email TEXT,
            Password TEXT,
            Phone TEXT,
            Address TEXT,
            Status BOOLEAN
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Restaurant_Category (
            Category_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Menu (
            Menu_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Price DECIMAL(4, 1),
            Description TEXT,
            Availability BOOLEAN
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Order_Detail (
            Order_Detail_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Menu_ID INTEGER NOT NULL,
            Quantity INTEGER,
            Subtotal DECIMAL(5, 1),
            FOREIGN KEY(Menu_ID) REFERENCES Menu(Menu_ID)
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Order_Status (
            Order_Status_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Description TEXT
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Delivery_Person (
            Delivery_Person_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            FirstName TEXT NOT NULL,
            LastName TEXT,
            Email TEXT,
            Password TEXT,
            Phone TEXT,
            Address TEXT,
            Status BOOLEAN,
            Vehicle TEXT
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Payment_Type (
            Payment_Type_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Description TEXT
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Payment_Status (
            Payment_Status_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL,
            Description TEXT
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Payment (
            Payment_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Payment_Type_ID INTEGER NOT NULL,
            Payment_Status_ID INTEGER NOT NULL,
            Date DATE,
            Time DATETIME,
            Reference TEXT,
            FOREIGN KEY(Payment_Type_ID) REFERENCES Payment_Type(Payment_Type_ID),
            FOREIGN KEY(Payment_Status_ID) REFERENCES Payment_Status(Payment_Status_ID)
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS "Order" (
            Order_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Client_ID INTEGER NOT NULL,
            Restaurant_ID INTEGER NOT NULL,
            Order_Detail_ID INTEGER NOT NULL,
            Order_Status_ID INTEGER NOT NULL,
            Delivery_Person_ID INTEGER,
            Payment_ID INTEGER,
            Date DATE,
            Time DATETIME,
            Total DECIMAL(5, 1),
            Delivery_Address TEXT,
            FOREIGN KEY(Client_ID) REFERENCES Client(Client_ID),
            FOREIGN KEY(Restaurant_ID) REFERENCES Restaurant(Restaurant_ID),
            FOREIGN KEY(Order_Detail_ID) REFERENCES Order_Detail(Order_Detail_ID),
            FOREIGN KEY(Order_Status_ID) REFERENCES Order_Status(Order_Status_ID),
            FOREIGN KEY(Delivery_Person_ID) REFERENCES Delivery_Person(Delivery_Person_ID),
            FOREIGN KEY(Payment_ID) REFERENCES Payment(Payment_ID)
        );
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS Restaurant (
            Restaurant_ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Category_ID INTEGER NOT NULL,
            Menu_ID INTEGER NOT NULL,
            Name TEXT NOT NULL,
            Address TEXT,
            Description TEXT,
            Email TEXT,
            Password TEXT,
            Phone TEXT,
            Opening_Hour INTEGER,
            Closing_Hour INTEGER,
            FOREIGN KEY(Category_ID) REFERENCES Restaurant_Category(Category_ID),
            FOREIGN KEY(Menu_ID) REFERENCES Menu(Menu_ID)
        );
    ''')
    conn.commit()
    conn.close()

# Insertar datos de ejemplo


def insert_sample_data():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Insertar Clientes
    cursor.execute('''
        INSERT INTO Client (FirstName, LastName, Email, Password, Phone, Address, Status)
        VALUES ('John', 'Doe', 'johndoe@example.com', 'password123', '1234567890', '123 Main St', 1),
               ('Jane', 'Smith', 'janesmith@example.com', 'password456', '0987654321', '456 Elm St', 1);
    ''')

    # Insertar Categorías de Restaurante
    cursor.execute('''
        INSERT INTO Restaurant_Category (Name)
        VALUES ('Fast Food'), ('Italian'), ('Chinese');
    ''')

    # Insertar Menú
    cursor.execute('''
        INSERT INTO Menu (Name, Price, Description, Availability)
        VALUES ('Burger', 5.99, 'Delicious beef burger', 1),
               ('Pizza', 8.99, 'Classic Italian pizza', 1),
               ('Noodles', 6.49, 'Chinese noodles', 1);
    ''')

    # Insertar Detalles de Pedido
    cursor.execute('''
        INSERT INTO Order_Detail (Menu_ID, Quantity, Subtotal)
        VALUES (1, 2, 11.98), (2, 1, 8.99), (3, 3, 19.47);
    ''')

    # Insertar Estados de Pedido
    cursor.execute('''
        INSERT INTO Order_Status (Name, Description)
        VALUES ('Pending', 'Order is pending'),
               ('Completed', 'Order is completed'),
               ('Cancelled', 'Order was cancelled');
    ''')

    # Insertar Personas de Entrega
    cursor.execute('''
        INSERT INTO Delivery_Person (FirstName, LastName, Email, Password, Phone, Address, Status, Vehicle)
        VALUES ('Alice', 'Johnson', 'alice@example.com', 'password789', '1112223333', '789 Oak St', 1, 'Bike'),
               ('Bob', 'Brown', 'bob@example.com', 'password101', '4445556666', '101 Pine St', 1, 'Car');
    ''')

    # Insertar Tipos de Pago
    cursor.execute('''
        INSERT INTO Payment_Type (Name, Description)
        VALUES ('Credit Card', 'Payment made with credit card'),
               ('Cash', 'Payment made with cash');
    ''')

    # Insertar Estados de Pago
    cursor.execute('''
        INSERT INTO Payment_Status (Name, Description)
        VALUES ('Pending', 'Payment is being processed'),
               ('Completed', 'Payment has been completed');
    ''')

    # Insertar Pagos
    cursor.execute('''
        INSERT INTO Payment (Payment_Type_ID, Payment_Status_ID, Date, Time, Reference)
        VALUES (1, 2, '2025-01-18', '15:00:00', 'ABC123'),
               (2, 1, '2025-01-18', '16:00:00', 'DEF456');
    ''')

    # Insertar Pedidos
    cursor.execute('''
        INSERT INTO "Order" (Client_ID, Restaurant_ID, Order_Detail_ID, Order_Status_ID, Delivery_Person_ID, Payment_ID, Date, Time, Total, Delivery_Address)
        VALUES (1, 1, 1, 1, 1, 1, '2025-01-18', '14:00:00', 20.97, '123 Main St'),
               (2, 2, 2, 2, 2, 2, '2025-01-18', '17:00:00', 30.46, '456 Elm St');
    ''')

    # Insertar Restaurantes
    cursor.execute('''
        INSERT INTO Restaurant (Category_ID, Menu_ID, Name, Address, Description, Email, Password, Phone, Opening_Hour, Closing_Hour)
        VALUES (1, 1, 'Burger Place', '123 Fast Food St', 'Delicious burgers', 'burgerplace@example.com', 'password123', '1234567890', 9, 22),
               (2, 2, 'Italiano', '456 Italian St', 'Classic Italian meals', 'italiano@example.com', 'password456', '0987654321', 10, 23);
    ''')

    conn.commit()
    conn.close()

# Rutas CRUD para todas las tablas


@restaurant_bp.route('/client', methods=['GET'])
def get_all_clients():
    conn = get_db_connection()
    clients = conn.execute('SELECT * FROM Client').fetchall()
    conn.close()
    return jsonify([dict(client) for client in clients])


@restaurant_bp.route('/restaurant_category', methods=['GET'])
def get_all_restaurant_categories():
    conn = get_db_connection()
    categories = conn.execute('SELECT * FROM Restaurant_Category').fetchall()
    conn.close()
    return jsonify([dict(category) for category in categories])


@restaurant_bp.route('/menu', methods=['GET'])
def get_all_menus():
    conn = get_db_connection()
    menus = conn.execute('SELECT * FROM Menu').fetchall()
    conn.close()
    return jsonify([dict(menu) for menu in menus])


@restaurant_bp.route('/order_detail', methods=['GET'])
def get_all_order_details():
    conn = get_db_connection()
    order_details = conn.execute('SELECT * FROM Order_Detail').fetchall()
    conn.close()
    return jsonify([dict(order_detail) for order_detail in order_details])


@restaurant_bp.route('/order_status', methods=['GET'])
def get_all_order_statuses():
    conn = get_db_connection()
    order_statuses = conn.execute('SELECT * FROM Order_Status').fetchall()
    conn.close()
    return jsonify([dict(order_status) for order_status in order_statuses])


@restaurant_bp.route('/delivery_person', methods=['GET'])
def get_all_delivery_persons():
    conn = get_db_connection()
    delivery_persons = conn.execute('SELECT * FROM Delivery_Person').fetchall()
    conn.close()
    return jsonify([dict(delivery_person) for delivery_person in delivery_persons])


@restaurant_bp.route('/payment_type', methods=['GET'])
def get_all_payment_types():
    conn = get_db_connection()
    payment_types = conn.execute('SELECT * FROM Payment_Type').fetchall()
    conn.close()
    return jsonify([dict(payment_type) for payment_type in payment_types])


@restaurant_bp.route('/payment_status', methods=['GET'])
def get_all_payment_statuses():
    conn = get_db_connection()
    payment_statuses = conn.execute('SELECT * FROM Payment_Status').fetchall()
    conn.close()
    return jsonify([dict(payment_status) for payment_status in payment_statuses])


@restaurant_bp.route('/payment', methods=['GET'])
def get_all_payments():
    conn = get_db_connection()
    payments = conn.execute('SELECT * FROM Payment').fetchall()
    conn.close()
    return jsonify([dict(payment) for payment in payments])


@restaurant_bp.route('/order', methods=['GET'])
def get_all_orders():
    conn = get_db_connection()
    orders = conn.execute('SELECT * FROM "Order"').fetchall()
    conn.close()
    return jsonify([dict(order) for order in orders])


@restaurant_bp.route('/restaurant', methods=['GET'])
def get_all_restaurants():
    conn = get_db_connection()
    restaurants = conn.execute('SELECT * FROM Restaurant').fetchall()
    conn.close()
    return jsonify([dict(restaurant) for restaurant in restaurants])


if __name__ == '__main__':
    create_tables()
    insert_sample_data()  # Insertar datos de ejemplo
    app.run(debug=True)
