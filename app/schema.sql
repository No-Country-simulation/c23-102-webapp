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
DROP TABLE IF EXISTS "Category";
CREATE TABLE IF NOT EXISTS "Category" (
	"Name"	TEXT NOT NULL,
	PRIMARY KEY("Name")
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
DROP TABLE IF EXISTS "Role";
CREATE TABLE IF NOT EXISTS "Role" (
	"Name"	TEXT NOT NULL,
	PRIMARY KEY("Name")
);
DROP TABLE IF EXISTS "User";
CREATE TABLE IF NOT EXISTS "User" (
	"Firstname"	VARCHAR(30) NOT NULL,
	"Lastname"	VARCHAR(30) NOT NULL,
	"Email"	VARCHAR(50) NOT NULL,
	"Password"	VARCHAR(50) NOT NULL,
	"Phone"	VARCHAR(20),
	"Role_Name"	TEXT NOT NULL,
	FOREIGN KEY("Role_Name") REFERENCES "Role"("Name"),
	PRIMARY KEY("Email")
);
DROP TABLE IF EXISTS "Client";
CREATE TABLE IF NOT EXISTS "Client" (
	"Email"	TEXT NOT NULL,
	"Location"	TEXT,
	"Postal_Code"	TEXT,
	FOREIGN KEY("Email") REFERENCES "User"("Email"),
	PRIMARY KEY("Email")
);
DROP TABLE IF EXISTS "Payment";
CREATE TABLE IF NOT EXISTS "Payment" (
	"Payment_Id"	INTEGER NOT NULL,
	"Restaurante_Email"	TEXT NOT NULL,
	"Client_Email"	TEXT NOT NULL,
	"Price_Id"	TEXT NOT NULL,
	PRIMARY KEY("Payment_Id" AUTOINCREMENT),
	FOREIGN KEY("Restaurante_Email") REFERENCES "Restaurant"("Email"),
	FOREIGN KEY("Client_Email") REFERENCES "Client"("Email")
);
INSERT INTO "Category" ("Name") VALUES ('Restaurante');
INSERT INTO "Category" ("Name") VALUES ('Cafetería');
INSERT INTO "Category" ("Name") VALUES ('Bar');
INSERT INTO "Category" ("Name") VALUES ('Heladería');
INSERT INTO "Category" ("Name") VALUES ('Tienda de abarrotes');
INSERT INTO "Role" ("Name") VALUES ('Cliente');
INSERT INTO "Role" ("Name") VALUES ('Restaurante');
COMMIT;
