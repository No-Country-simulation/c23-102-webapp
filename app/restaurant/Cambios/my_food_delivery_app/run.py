from app import create_app
from app.models import Client, Restaurant_Category, Menu, Order_Detail, Order_Status, Delivery_Person, Payment_Type, Payment_Status, Payment, Order, Restaurant
from app import db
import datetime

app = create_app()

with app.app_context():
    db.create_all()

    try:
        # Clientes
        client1 = Client(FirstName='John', LastName='Doe', Email='johndoe@example.com', Password='password123', Phone='1234567890', Address='123 Main St', Status=True)
        client2 = Client(FirstName='Jane', LastName='Smith', Email='janesmith@example.com', Password='password456', Phone='0987654321', Address='456 Elm St', Status=True)
        db.session.add_all([client1, client2])
        db.session.commit()

        # Categorías de Restaurante
        category1 = Restaurant_Category(Name='Fast Food')
        category2 = Restaurant_Category(Name='Italian')
        category3 = Restaurant_Category(Name='Chinese')
        db.session.add_all([category1, category2, category3])
        db.session.commit()

        # Menú
        menu1 = Menu(Name='Burger', Price=5.99, Description='Delicious beef burger', Availability=True)
        menu2 = Menu(Name='Pizza', Price=8.99, Description='Classic Italian pizza', Availability=True)
        menu3 = Menu(Name='Noodles', Price=6.49, Description='Chinese noodles', Availability=True)
        db.session.add_all([menu1, menu2, menu3])
        db.session.commit()

        # Detalles de Pedido
        order_detail1 = Order_Detail(Menu_ID=menu1.Menu_ID, Quantity=2, Subtotal=11.98)
        order_detail2 = Order_Detail(Menu_ID=menu2.Menu_ID, Quantity=1, Subtotal=8.99)
        order_detail3 = Order_Detail(Menu_ID=menu3.Menu_ID, Quantity=3, Subtotal=19.47)
        db.session.add_all([order_detail1, order_detail2, order_detail3])
        db.session.commit()

        # Estados de Pedido
        order_status1 = Order_Status(Name='Pending', Description='Order is pending')
        order_status2 = Order_Status(Name='Completed', Description='Order is completed')
        order_status3 = Order_Status(Name='Cancelled', Description='Order was cancelled')
        db.session.add_all([order_status1, order_status2, order_status3])
        db.session.commit()

        # Personas de Entrega
        delivery_person1 = Delivery_Person(FirstName='Alice', LastName='Johnson', Email='alice@example.com', Password='password789', Phone='1112223333', Address='789 Oak St', Status=True, Vehicle='Bike')
        delivery_person2 = Delivery_Person(FirstName='Bob', LastName='Brown', Email='bob@example.com', Password='password101', Phone='4445556666', Address='101 Pine St', Status=True, Vehicle='Car')
        db.session.add_all([delivery_person1, delivery_person2])
        db.session.commit()

        # Tipos de Pago
        payment_type1 = Payment_Type(Name='Credit Card', Description='Payment made with credit card')
        payment_type2 = Payment_Type(Name='Cash', Description='Payment made with cash')
        db.session.add_all([payment_type1, payment_type2])
        db.session.commit()

        # Estados de Pago
        payment_status1 = Payment_Status(Name='Pending', Description='Payment is being processed')
        payment_status2 = Payment_Status(Name='Completed', Description='Payment has been completed')
        db.session.add_all([payment_status1, payment_status2])
        db.session.commit()

        # Pagos
        payment1 = Payment(Payment_Type_ID=payment_type1.Payment_Type_ID, Payment_Status_ID=payment_status2.Payment_Status_ID, Date=datetime.datetime(2025, 1, 18, 15, 0, 0), Time=datetime.datetime(2025, 1, 18, 15, 0, 0), Reference='ABC123')
        payment2 = Payment(Payment_Type_ID=payment_type2.Payment_Type_ID, Payment_Status_ID=payment_status1.Payment_Status_ID, Date=datetime.datetime(2025, 1, 18, 16, 0, 0), Time=datetime.datetime(2025, 1, 18, 16, 0, 0), Reference='DEF456')
        db.session.add_all([payment1, payment2])
        db.session.commit()

        # Restaurantes
        restaurant1 = Restaurant(Category_ID=category1.Category_ID, Menu_ID=menu1.Menu_ID, Name='Burger Place', Address='123 Fast Food St', Description='Delicious burgers', Email='burgerplace@example.com', Password='password123', Phone='1234567890', Opening_Hour=9, Closing_Hour=22)
        restaurant2 = Restaurant(Category_ID=category2.Category_ID, Menu_ID=menu2.Menu_ID, Name='Italiano', Address='456 Italian St', Description='Classic Italian meals', Email='italiano@example.com', Password='password456', Phone='0987654321', Opening_Hour=10, Closing_Hour=23)
        db.session.add_all([restaurant1, restaurant2])
        db.session.commit()

        # Pedidos
        order1 = Order(Client_ID=client1.Client_ID, Restaurant_ID=restaurant1.Restaurant_ID, Order_Detail_ID=order_detail1.Order_Detail_ID, Order_Status_ID=order_status1.Order_Status_ID, Delivery_Person_ID=delivery_person1.Delivery_Person_ID, Payment_ID=payment1.Payment_ID, Date=datetime.datetime(2025, 1, 18, 14, 0, 0), Time=datetime.datetime(2025, 1, 18, 14, 0, 0), Total=20.97, Delivery_Address='123 Main St')
        order2 = Order(Client_ID=client2.Client_ID, Restaurant_ID=restaurant2.Restaurant_ID, Order_Detail_ID=order_detail2.Order_Detail_ID, Order_Status_ID=order_status2.Order_Status_ID, Delivery_Person_ID=delivery_person2.Delivery_Person_ID, Payment_ID=payment2.Payment_ID, Date=datetime.datetime(2025, 1, 18, 17, 0, 0), Time=datetime.datetime(2025, 1, 18, 17, 0, 0), Total=30.46, Delivery_Address='456 Elm St')
        db.session.add_all([order1, order2])
        db.session.commit()


    except Exception as e:
        print(f"Error inserting sample data: {e}")
        db.session.rollback()

if __name__ == '__main__':
    app.run(debug=True)