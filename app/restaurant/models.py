from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

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
        return {'Category_ID': self.Category_ID, 'Name': self.Name}
