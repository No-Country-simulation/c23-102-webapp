from flask import jsonify
from app.db import get_db  # Cambiar la importación a get_db desde app.db
from . import restaurant_bp  # Usar el Blueprint ya creado en __init__.py

@restaurant_bp.route('/clients', methods=['GET'])
def get_all_clients():
    conn = get_db()  # Usamos get_db para obtener la conexión
    clients = conn.execute('SELECT * FROM Client').fetchall()
    conn.close()
    return jsonify([dict(client) for client in clients])

@restaurant_bp.route('/restaurant_categories', methods=['GET'])
def get_all_restaurant_categories():
    conn = get_db()  # Usamos get_db para obtener la conexión
    categories = conn.execute('SELECT * FROM Restaurant_Category').fetchall()
    conn.close()
    return jsonify([dict(category) for category in categories])

@restaurant_bp.route('/menus', methods=['GET'])
def get_all_menus():
    conn = get_db()  # Usamos get_db para obtener la conexión
    menus = conn.execute('SELECT * FROM Menu').fetchall()
    conn.close()
    return jsonify([dict(menu) for menu in menus])

@restaurant_bp.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    conn = get_db()  # Usamos get_db para obtener la conexión
    restaurants = conn.execute('SELECT * FROM Restaurant').fetchall()
    conn.close()
    return jsonify([dict(restaurant) for restaurant in restaurants])
