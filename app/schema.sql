BEGIN TRANSACTION;
DROP TABLE IF EXISTS "Menu";
CREATE TABLE IF NOT EXISTS "Menu" (
	"Menu_ID"	INTEGER NOT NULL,
	"Name"	VARCHAR(30) NOT NULL,
	"Price"	DECIMAL(4, 1),
	"Description"	VARCHAR(50),
	"Availability"	BOOLEAN,
	PRIMARY KEY("Menu_ID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "Order_Detail";
CREATE TABLE IF NOT EXISTS "Order_Detail" (
	"Order_Detail_ID"	INTEGER NOT NULL,
	"Menu_ID"	INTEGER,
	"Quantity"	INTEGER,
	"Subtotal"	DECIMAL(5, 1),
	PRIMARY KEY("Order_Detail_ID" AUTOINCREMENT),
	FOREIGN KEY("Menu_ID") REFERENCES "Menu"("Menu_ID")
);
DROP TABLE IF EXISTS "Order_Status";
CREATE TABLE IF NOT EXISTS "Order_Status" (
	"Order_Status_ID"	INTEGER NOT NULL,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Order_Status_ID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "Delivery_Person";
CREATE TABLE IF NOT EXISTS "Delivery_Person" (
	"Delivery_Person_ID"	INTEGER NOT NULL,
	"FirstName"	VARCHAR(30) NOT NULL,
	"LastName"	VARCHAR(30),
	"Email"	VARCHAR(30),
	"Password"	VARCHAR(30),
	"Phone"	VARCHAR(30),
	"Address"	VARCHAR(50),
	"Status"	BOOLEAN,
	"Vehicle"	VARCHAR(30),
	PRIMARY KEY("Delivery_Person_ID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "Payment_Type";
CREATE TABLE IF NOT EXISTS "Payment_Type" (
	"Payment_Type_ID"	INTEGER NOT NULL,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Payment_Type_ID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "Payment_Status";
CREATE TABLE IF NOT EXISTS "Payment_Status" (
	"Payment_Status_ID"	INTEGER NOT NULL,
	"Name"	VARCHAR(30) NOT NULL,
	"Description"	VARCHAR(50),
	PRIMARY KEY("Payment_Status_ID" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "Payment";
CREATE TABLE IF NOT EXISTS "Payment" (
	"Payment_ID"	INTEGER NOT NULL,
	"Payment_Type_ID"	INTEGER NOT NULL,
	"Payment_Status_ID"	INTEGER NOT NULL,
	"Date"	DATE,
	"Time"	DATETIME,
	"Reference"	VARCHAR(50),
	FOREIGN KEY("Payment_Status_ID") REFERENCES "Payment_Status"("Payment_Status_ID"),
	PRIMARY KEY("Payment_ID" AUTOINCREMENT),
	FOREIGN KEY("Payment_Type_ID") REFERENCES "Payment_Type"("Payment_Type_ID")
);
DROP TABLE IF EXISTS "Order";
CREATE TABLE IF NOT EXISTS "Order" (
	"Order_ID"	INTEGER NOT NULL,
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
	FOREIGN KEY("Order_Detail_ID") REFERENCES "Order_Detail"("Order_Detail_ID"),
	FOREIGN KEY("Payment_ID") REFERENCES "Payment"("Payment_ID"),
	FOREIGN KEY("Order_Status_ID") REFERENCES "Order_Status"("Order_Status_ID"),
	FOREIGN KEY("Restaurant_ID") REFERENCES "Restaurant"("Restaurant_ID"),
	PRIMARY KEY("Order_ID" AUTOINCREMENT),
	FOREIGN KEY("Client_ID") REFERENCES "Client"("Client_ID"),
	FOREIGN KEY("Delivery_Person_ID") REFERENCES "Delivery_Person"("Delivery_Person_ID")
);
DROP TABLE IF EXISTS "User";
CREATE TABLE IF NOT EXISTS "User" (
	"Firstname"	VARCHAR(30) NOT NULL,
	"Lastname"	VARCHAR(30) NOT NULL,
	"Email"	VARCHAR(50) NOT NULL,
	"Password"	VARCHAR(50) NOT NULL,
	"Phone"	VARCHAR(20),
	PRIMARY KEY("Email")
);
DROP TABLE IF EXISTS "Category";
CREATE TABLE IF NOT EXISTS "Category" (
	"Name"	TEXT NOT NULL,
	PRIMARY KEY("Name")
);
DROP TABLE IF EXISTS "Client";
CREATE TABLE IF NOT EXISTS "Client" (
	"Email"	TEXT NOT NULL,
	"Complete_Name"	TEXT NOT NULL,
	"Location"	TEXT,
	"City"	TEXT,
	FOREIGN KEY("Email") REFERENCES "User"("Email"),
	PRIMARY KEY("Email")
);
DROP TABLE IF EXISTS "Restaurant";
CREATE TABLE IF NOT EXISTS "Restaurant" (
	"Opening_Hour"	TIME,
	"Closing_Hour"	TIME,
	"Description"	TEXT,
	"Email"	TEXT NOT NULL,
	"Location"	TEXT NOT NULL,
	"Location_Name"	TEXT NOT NULL,
	"Brand"	TEXT NOT NULL,
	"Category_Name"	TEXT NOT NULL,
	"Banner_Url"	TEXT,
	FOREIGN KEY("Category_Name") REFERENCES "Category"("Name"),
	PRIMARY KEY("Email")
);
INSERT INTO "Category" ("Name") VALUES ('Pizzería');
INSERT INTO "Category" ("Name") VALUES ('Lomitería');
INSERT INTO "Client" ("Email","Complete_Name","Location","City") VALUES ('bicho@gmail.com','Victor Ayala','Av. Espana','Ciudad del este');
INSERT INTO "Client" ("Email","Complete_Name","Location","City") VALUES ('biho@gmail.com','Victor Ayala','Av. Espana','Ciudad del este');
COMMIT;
