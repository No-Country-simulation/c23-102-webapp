BEGIN TRANSACTION;
DROP TABLE IF EXISTS "Client";
CREATE TABLE IF NOT EXISTS "Client" (
	"Client_ID"	INTEGER,
	"FirstName"	VARCHAR(30) NOT NULL,
	"LastName"	VARCHAR(30) NOT NULL,
	"Email"	VARCHAR(30),
	"Password"	VARCHAR(30),
	"Phone"	VARCHAR(30),
	"Address"	VARCHAR(50),
	"Status"	BOOLEAN,
	PRIMARY KEY("Client_ID")
);
DROP TABLE IF EXISTS "Restaurant_Category";
CREATE TABLE IF NOT EXISTS "Restaurant_Category" (
	"Category_ID"	INTEGER,
	"Name"	VARCHAR(30) NOT NULL,
	PRIMARY KEY("Category_ID")
);
DROP TABLE IF EXISTS "Menu";
CREATE TABLE IF NOT EXISTS "Menu" (
	"Menu_ID"	INTEGER,
	"Name"	VARCHAR(30) NOT NULL,
	"Price"	DECIMAL(4, 1),
	"Description"	VARCHAR(50),
	"Availability"	BOOLEAN,
	PRIMARY KEY("Menu_ID")
);
DROP TABLE IF EXISTS "Order_Detail";
CREATE TABLE IF NOT EXISTS "Order_Detail" (
	"Order_Detail_ID"	INTEGER,
	"Menu_ID"	INTEGER NOT NULL,
	"Quantity"	INTEGER,
	"Subtotal"	DECIMAL(5, 1),
	PRIMARY KEY("Order_Detail_ID"),
	FOREIGN KEY("Menu_ID") REFERENCES "Menu"("Menu_ID")
);
DROP TABLE IF EXISTS "Order_Status";
CREATE TABLE IF NOT EXISTS "Order_Status" (
	"Order_Status_ID"	INTEGER,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Order_Status_ID")
);
DROP TABLE IF EXISTS "Delivery_Person";
CREATE TABLE IF NOT EXISTS "Delivery_Person" (
	"Delivery_Person_ID"	INTEGER,
	"FirstName"	VARCHAR(30) NOT NULL,
	"LastName"	VARCHAR(30),
	"Email"	VARCHAR(30),
	"Password"	VARCHAR(30),
	"Phone"	VARCHAR(30),
	"Address"	VARCHAR(50),
	"Status"	BOOLEAN,
	"Vehicle"	VARCHAR(30),
	PRIMARY KEY("Delivery_Person_ID")
);
DROP TABLE IF EXISTS "Payment_Type";
CREATE TABLE IF NOT EXISTS "Payment_Type" (
	"Payment_Type_ID"	INTEGER,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Payment_Type_ID")
);
DROP TABLE IF EXISTS "Payment_Status";
CREATE TABLE IF NOT EXISTS "Payment_Status" (
	"Payment_Status_ID"	INTEGER,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Payment_Status_ID")
);
DROP TABLE IF EXISTS "Payment";
CREATE TABLE IF NOT EXISTS "Payment" (
	"Payment_ID"	INTEGER,
	"Payment_Type_ID"	INTEGER NOT NULL,
	"Payment_Status_ID"	INTEGER NOT NULL,
	"Date"	DATE,
	"Time"	DATETIME,
	"Reference"	VARCHAR(50),
	PRIMARY KEY("Payment_ID"),
	FOREIGN KEY("Payment_Type_ID") REFERENCES "Payment_Type"("Payment_Type_ID"),
	FOREIGN KEY("Payment_Status_ID") REFERENCES "Payment_Status"("Payment_Status_ID")
);
DROP TABLE IF EXISTS "Order";
CREATE TABLE IF NOT EXISTS "Order" (
	"Order_ID"	INTEGER,
	"Client_ID"	INTEGER NOT NULL,
	"Restaurant_ID"	INTEGER NOT NULL,
	"Order_Detail_ID"	INTEGER NOT NULL,
	"Order_Status_ID"	INTEGER NOT NULL,
	"Delivery_Person_ID"	INTEGER,
	"Payment_ID"	INTEGER,
	"Date"	DATE,
	"Time"	DATETIME,
	"Total"	DECIMAL(5, 1),
	"Delivery_Address"	VARCHAR(50),
	FOREIGN KEY("Client_ID") REFERENCES "Client"("Client_ID"),
	FOREIGN KEY("Delivery_Person_ID") REFERENCES "Delivery_Person"("Delivery_Person_ID"),
	PRIMARY KEY("Order_ID"),
	FOREIGN KEY("Order_Status_ID") REFERENCES "Order_Status"("Order_Status_ID"),
	FOREIGN KEY("Restaurant_ID") REFERENCES "Restaurant"("Restaurant_ID"),
	FOREIGN KEY("Order_Detail_ID") REFERENCES "Order_Detail"("Order_Detail_ID"),
	FOREIGN KEY("Payment_ID") REFERENCES "Payment"("Payment_ID")
);
DROP TABLE IF EXISTS "Restaurant";
CREATE TABLE IF NOT EXISTS "Restaurant" (
	"Restaurant_ID"	INTEGER,
	"Category_ID"	INTEGER NOT NULL,
	"Menu_ID"	INTEGER NOT NULL,
	"Name"	VARCHAR(30) NOT NULL,
	"Address"	VARCHAR(50),
	"Description"	VARCHAR(50),
	"Email"	VARCHAR(30),
	"Password"	VARCHAR(30),
	"Phone"	VARCHAR(30),
	"Opening_Hour"	INTEGER,
	"Closing_Hour"	INTEGER,
	FOREIGN KEY("Category_ID") REFERENCES "Restaurant_Category"("Category_ID"),
	FOREIGN KEY("Menu_ID") REFERENCES "Menu"("Menu_ID"),
	PRIMARY KEY("Restaurant_ID")
);
COMMIT;
