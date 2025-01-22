from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base


db = SQLAlchemy()
Base = declarative_base()

class Client(db.Model):
    __tablename__ = 'Client'
    Client_ID = Column(Integer, primary_key=True, autoincrement=True)
    FirstName = Column(String, nullable=False)
    LastName = Column(String, nullable=False)
    Email = Column(String)
    Password = Column(String)
    Phone = Column(String)
    Address = Column(String)
    Status = Column(Boolean)
    def to_dict(self):
        return {
            'Client_ID': self.Client_ID,
            'FirstName': self.FirstName,
            'LastName': self.LastName,
            'Email': self.Email,
            'Password': self.Password,
            'Phone': self.Phone,
            'Address': self.Address,
            'Status': self.Status
        }

class Restaurant_Category(db.Model):
    __tablename__ = 'Restaurant_Category'
    Category_ID = Column(Integer, primary_key=True, autoincrement=True)
    Name = Column(String, nullable=False)
    def to_dict(self):
        return {
            'Category_ID': self.Category_ID,
            'Name': self.Name
        }

class Menu(db.Model):
    __tablename__ = 'Menu'
    Menu_ID = Column(Integer, primary_key=True, autoincrement=True)
    Name = Column(String, nullable=False)
    Price = Column(Float)
    Description = Column(String)
    Availability = Column(Boolean)
    def to_dict(self):
        return {
            'Menu_ID': self.Menu_ID,
            'Name': self.Name,
            'Price': self.Price,
            'Description': self.Description,
            'Availability': self.Availability
        }

class Order_Detail(db.Model):
    __tablename__ = 'Order_Detail'
    Order_Detail_ID = Column(Integer, primary_key=True, autoincrement=True)
    Menu_ID = Column(Integer, ForeignKey('Menu.Menu_ID'), nullable=False)
    Quantity = Column(Integer)
    Subtotal = Column(Float)
    menu = relationship("Menu", backref="order_details")
    def to_dict(self):
        return {
            'Order_Detail_ID': self.Order_Detail_ID,
            'Menu_ID': self.Menu_ID,
            'Quantity': self.Quantity,
            'Subtotal': self.Subtotal
        }

class Order_Status(db.Model):
    __tablename__ = 'Order_Status'
    Order_Status_ID = Column(Integer, primary_key=True, autoincrement=True)
    Name = Column(String, nullable=False)
    Description = Column(String)
    def to_dict(self):
        return {
            'Order_Status_ID': self.Order_Status_ID,
            'Name': self.Name,
            'Description': self.Description
        }

class Delivery_Person(db.Model):
    __tablename__ = 'Delivery_Person'
    Delivery_Person_ID = Column(Integer, primary_key=True, autoincrement=True)
    FirstName = Column(String, nullable=False)
    LastName = Column(String)
    Email = Column(String)
    Password = Column(String)
    Phone = Column(String)
    Address = Column(String)
    Status = Column(Boolean)
    Vehicle = Column(String)
    def to_dict(self):
        return {
            'Delivery_Person_ID': self.Delivery_Person_ID,
            'FirstName': self.FirstName,
            'LastName': self.LastName,
            'Email': self.Email,
            'Password': self.Password,
            'Phone': self.Phone,
            'Address': self.Address,
            'Status': self.Status,
            'Vehicle': self.Vehicle
        }

class Payment_Type(db.Model):
    __tablename__ = 'Payment_Type'
    Payment_Type_ID = Column(Integer, primary_key=True, autoincrement=True)
    Name = Column(String, nullable=False)
    Description = Column(String)
    def to_dict(self):
        return {
            'Payment_Type_ID': self.Payment_Type_ID,
            'Name': self.Name,
            'Description': self.Description
        }

class Payment_Status(db.Model):
    __tablename__ = 'Payment_Status'
    Payment_Status_ID = Column(Integer, primary_key=True, autoincrement=True)
    Name = Column(String, nullable=False)
    Description = Column(String)
    def to_dict(self):
        return {
            'Payment_Status_ID': self.Payment_Status_ID,
            'Name': self.Name,
            'Description': self.Description
        }

class Payment(db.Model):
    __tablename__ = 'Payment'
    Payment_ID = Column(Integer, primary_key=True, autoincrement=True)
    Payment_Type_ID = Column(Integer, ForeignKey('Payment_Type.Payment_Type_ID'), nullable=False)
    Payment_Status_ID = Column(Integer, ForeignKey('Payment_Status.Payment_Status_ID'), nullable=False)
    Date = Column(DateTime)
    Time = Column(DateTime)
    Reference = Column(String)
    payment_type = relationship("Payment_Type", backref="payments")
    payment_status = relationship("Payment_Status", backref="payments")
    def to_dict(self):
        return {
            'Payment_ID': self.Payment_ID,
            'Payment_Type_ID': self.Payment_Type_ID,
            'Payment_Status_ID': self.Payment_Status_ID,
            'Date': self.Date.isoformat() if self.Date else None, #Handle potential None values
            'Time': self.Time.isoformat() if self.Time else None, #Handle potential None values
            'Reference': self.Reference
        }

class Order(db.Model):
    __tablename__ = '"Order"'
    Order_ID = Column(Integer, primary_key=True, autoincrement=True)
    Client_ID = Column(Integer, ForeignKey('Client.Client_ID'), nullable=False)
    Restaurant_ID = Column(Integer, ForeignKey('Restaurant.Restaurant_ID'), nullable=False)
    Order_Detail_ID = Column(Integer, ForeignKey('Order_Detail.Order_Detail_ID'), nullable=False)
    Order_Status_ID = Column(Integer, ForeignKey('Order_Status.Order_Status_ID'), nullable=False)
    Delivery_Person_ID = Column(Integer, ForeignKey('Delivery_Person.Delivery_Person_ID'))
    Payment_ID = Column(Integer, ForeignKey('Payment.Payment_ID'))
    Date = Column(DateTime)
    Time = Column(DateTime)
    Total = Column(Float)
    Delivery_Address = Column(String)
    client = relationship("Client", backref="orders")
    restaurant = relationship("Restaurant", backref="orders")
    order_detail = relationship("Order_Detail", backref="order")
    order_status = relationship("Order_Status", backref="orders")
    delivery_person = relationship("Delivery_Person", backref="orders")
    payment = relationship("Payment", backref="orders")
    def to_dict(self):
        return {
            'Order_ID': self.Order_ID,
            'Client_ID': self.Client_ID,
            'Restaurant_ID': self.Restaurant_ID,
            'Order_Detail_ID': self.Order_Detail_ID,
            'Order_Status_ID': self.Order_Status_ID,
            'Delivery_Person_ID': self.Delivery_Person_ID,
            'Payment_ID': self.Payment_ID,
            'Date': self.Date.isoformat() if self.Date else None, #Handle potential None values
            'Time': self.Time.isoformat() if self.Time else None, #Handle potential None values
            'Total': self.Total,
            'Delivery_Address': self.Delivery_Address
        }

class Restaurant(db.Model):
    __tablename__ = 'Restaurant'
    Restaurant_ID = Column(Integer, primary_key=True, autoincrement=True)
    Category_ID = Column(Integer, ForeignKey('Restaurant_Category.Category_ID'), nullable=False)
    Menu_ID = Column(Integer, ForeignKey('Menu.Menu_ID'), nullable=False)
    Name = Column(String, nullable=False)
    Address = Column(String)
    Description = Column(String)
    Email = Column(String)
    Password = Column(String)
    Phone = Column(String)
    Opening_Hour = Column(Integer)
    Closing_Hour = Column(Integer)
    category = relationship("Restaurant_Category", backref="restaurants")
    menu = relationship("Menu", backref="restaurants")
    def to_dict(self):
        return {
            'Restaurant_ID': self.Restaurant_ID,
            'Category_ID': self.Category_ID,
            'Menu_ID': self.Menu_ID,
            'Name': self.Name,
            'Address': self.Address,
            'Description': self.Description,
            'Email': self.Email,
            'Password': self.Password,
            'Phone': self.Phone,
            'Opening_Hour': self.Opening_Hour,
            'Closing_Hour': self.Closing_Hour
        }