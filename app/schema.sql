BEGIN TRANSACTION;
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
DROP TABLE IF EXISTS "Payment";
CREATE TABLE IF NOT EXISTS "Payment" (
	"Payment_Id"	INTEGER NOT NULL,
	"Restaurante_Email"	TEXT NOT NULL,
	"Client_Email"	TEXT NOT NULL,
	"Price_Id"	TEXT NOT NULL,
	FOREIGN KEY("Client_Email") REFERENCES "Client"("Email"),
	PRIMARY KEY("Payment_Id" AUTOINCREMENT),
	FOREIGN KEY("Restaurante_Email") REFERENCES "Restaurant"("Email")
);
DROP TABLE IF EXISTS "Client";
CREATE TABLE IF NOT EXISTS "Client" (
	"Email"	TEXT NOT NULL,
	"Location"	TEXT,
	"Postal_Code"	TEXT,
	"Photo_Path"	TEXT,
	PRIMARY KEY("Email"),
	FOREIGN KEY("Email") REFERENCES "User"("Email")
);
DROP TABLE IF EXISTS "Menu";
CREATE TABLE IF NOT EXISTS "Menu" (
	"Menu_ID"	INTEGER NOT NULL,
	"Title"	TEXT NOT NULL,
	"Description"	TEXT,
	"Restaurant_Email"	TEXT NOT NULL,
	"Image_Path"	TEXT,
	"Is_Active"	NUMERIC,
	PRIMARY KEY("Menu_ID" AUTOINCREMENT),
	FOREIGN KEY("Restaurant_Email") REFERENCES "Restaurant"("Email")
);
INSERT INTO "Category" ("Name") VALUES ('Restaurante');
INSERT INTO "Category" ("Name") VALUES ('Cafetería');
INSERT INTO "Category" ("Name") VALUES ('Bar');
INSERT INTO "Category" ("Name") VALUES ('Heladería');
INSERT INTO "Category" ("Name") VALUES ('Tienda de abarrotes');
INSERT INTO "Restaurant" ("Opening_Hour","Closing_Hour","Description","Email","Location","Location_Name","Brand","Category_Name","Banner_Url") VALUES (NULL,NULL,NULL,'victorpadilal@gmail.com','Av. Perú','Asados Padilla Paraguay','Asados Padilla','Restaurante','static/bd.png');
INSERT INTO "Restaurant" ("Opening_Hour","Closing_Hour","Description","Email","Location","Location_Name","Brand","Category_Name","Banner_Url") VALUES (NULL,NULL,NULL,'victorpadilla@gmail.com','Av. Perú','Asados Padilla Paraguay','Asados Padilla','Restaurante','static/bd.png');
INSERT INTO "Role" ("Name") VALUES ('Cliente');
INSERT INTO "Role" ("Name") VALUES ('Restaurante');
INSERT INTO "User" ("Firstname","Lastname","Email","Password","Phone","Role_Name") VALUES ('Victor','Padilla','victorpadilla@gmail.com','scrypt:32768:8:1$Vyxb2CWf6VWCCL18$5b069c3d600cf6619129b38e18f2cf4eaa60134dbd043f64cc97d4a6de2a8d796fd0a1c83d44311a5eca6239fea3d2fa211642a4c34c9917973c091cc5fd0c76','432142','Restaurante');
INSERT INTO "User" ("Firstname","Lastname","Email","Password","Phone","Role_Name") VALUES ('Tomás','Ayala','tomasayala@gmail.com','scrypt:32768:8:1$IWR7NBKayU8EwfqQ$3b4f4561a5fe415472bf901a02a3868335b67e61622140b0b435b19a4b9b214c04c7ad382371e970b4b5452ccdf21929b1ad6a03dbe32a85910a39245a2f4bf1','432142','Cliente');
INSERT INTO "Payment" ("Payment_Id","Restaurante_Email","Client_Email","Price_Id") VALUES (1,'victorpadilla@gmail.com','tomasayala@gmail.com','242f23fsd');
INSERT INTO "Client" ("Email","Location","Postal_Code","Photo_Path") VALUES ('tomasayala@gmail.com','Av. 5 de septiembre','f432',NULL);
COMMIT;
