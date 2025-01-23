from flask import Blueprint, jsonify
from app.models import Client, Restaurant_Category, Menu, Order_Detail, Order_Status, Delivery_Person, Payment_Type, Payment_Status, Payment, Order, Restaurant

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/client', methods=['GET'])
def get_all_clients():
    clients = Client.query.all()
    return jsonify([client.to_dict() for client in clients])

@routes_bp.route('/restaurant_category', methods=['GET'])
def get_all_restaurant_categories():
    categories = Restaurant_Category.query.all()
    return jsonify([category.to_dict() for category in categories])

@routes_bp.route('/menu', methods=['GET'])
def get_all_menus():
    menus = Menu.query.all()
    return jsonify([menu.to_dict() for menu in menus])

@routes_bp.route('/order_detail', methods=['GET'])
def get_all_order_details():
    order_details = Order_Detail.query.all()
    return jsonify([order_detail.to_dict() for order_detail in order_details])

@routes_bp.route('/order_status', methods=['GET'])
def get_all_order_statuses():
    order_statuses = Order_Status.query.all()
    return jsonify([order_status.to_dict() for order_status in order_statuses])

@routes_bp.route('/delivery_person', methods=['GET'])
def get_all_delivery_persons():
    delivery_persons = Delivery_Person.query.all()
    return jsonify([delivery_person.to_dict() for delivery_person in delivery_persons])

@routes_bp.route('/payment_type', methods=['GET'])
def get_all_payment_types():
    payment_types = Payment_Type.query.all()
    return jsonify([payment_type.to_dict() for payment_type in payment_types])

@routes_bp.route('/payment_status', methods=['GET'])
def get_all_payment_statuses():
    payment_statuses = Payment_Status.query.all()
    return jsonify([payment_status.to_dict() for payment_status in payment_statuses])

@routes_bp.route('/payment', methods=['GET'])
def get_all_payments():
    payments = Payment.query.all()
    return jsonify([payment.to_dict() for payment in payments])

@routes_bp.route('/order', methods=['GET'])
def get_all_orders():
    orders = Order.query.all()
    return jsonify([order.to_dict() for order in orders])

@routes_bp.route('/restaurant', methods=['GET'])
def get_all_restaurants():
    restaurants = Restaurant.query.all()
    return jsonify([restaurant.to_dict() for restaurant in restaurants])
