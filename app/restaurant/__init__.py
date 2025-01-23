from flask import Flask
from app.db import get_db
from app.routes import routes_bp
from app.restaurant import restaurant_bp
from app.models import db

app = Flask(__name__)

# Configura la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Registra los blueprints
app.register_blueprint(routes_bp, url_prefix='/api')
app.register_blueprint(restaurant_bp)

if __name__ == '__main__':
    app.run(debug=True)
