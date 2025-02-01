BEGIN TRANSACTION;

-- Tabla Restaurant_Category
DROP TABLE IF EXISTS "Restaurant_Category";
CREATE TABLE IF NOT EXISTS "Restaurant_Category" (
    "Category_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL
);

-- Inserciones iniciales para Restaurant_Category
INSERT INTO "Restaurant_Category" ("Name") VALUES ('Restaurante');
INSERT INTO "Restaurant_Category" ("Name") VALUES ('Cafetería');
INSERT INTO "Restaurant_Category" ("Name") VALUES ('Bar');
INSERT INTO "Restaurant_Category" ("Name") VALUES ('Heladería');
INSERT INTO "Restaurant_Category" ("Name") VALUES ('Tienda de abarrotes');

-- Tabla Client
DROP TABLE IF EXISTS "Client";
CREATE TABLE IF NOT EXISTS "Client" (
    "Client_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT,
    "Password" TEXT,
    "Phone" TEXT,
    "Address" TEXT,
    "Status" BOOLEAN
);

-- Tabla Menu
DROP TABLE IF EXISTS "Menu";
CREATE TABLE IF NOT EXISTS "Menu" (
    "Menu_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Price" DECIMAL(4, 1),
    "Description" TEXT,
    "Availability" BOOLEAN
);

-- Tabla Order_Detail
DROP TABLE IF EXISTS "Order_Detail";
CREATE TABLE IF NOT EXISTS "Order_Detail" (
    "Order_Detail_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Menu_ID" INTEGER NOT NULL,
    "Quantity" INTEGER,
    "Subtotal" DECIMAL(5, 1),
    FOREIGN KEY("Menu_ID") REFERENCES "Menu"("Menu_ID")
);

-- Tabla Order_Status
DROP TABLE IF EXISTS "Order_Status";
CREATE TABLE IF NOT EXISTS "Order_Status" (
    "Order_Status_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Description" TEXT
);

-- Tabla Delivery_Person
DROP TABLE IF EXISTS "Delivery_Person";
CREATE TABLE IF NOT EXISTS "Delivery_Person" (
    "Delivery_Person_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT,
    "Email" TEXT,
    "Password" TEXT,
    "Phone" TEXT,
    "Address" TEXT,
    "Status" BOOLEAN,
    "Vehicle" TEXT
);

-- Tabla Payment_Type
DROP TABLE IF EXISTS "Payment_Type";
CREATE TABLE IF NOT EXISTS "Payment_Type" (
    "Payment_Type_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Description" TEXT
);

-- Tabla Payment_Status
DROP TABLE IF EXISTS "Payment_Status";
CREATE TABLE IF NOT EXISTS "Payment_Status" (
    "Payment_Status_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Description" TEXT
);

-- Tabla Payment
DROP TABLE IF EXISTS "Payment";
CREATE TABLE IF NOT EXISTS "Payment" (
    "Payment_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Payment_Type_ID" INTEGER NOT NULL,
    "Payment_Status_ID" INTEGER NOT NULL,
    "Date" DATE,
    "Time" DATETIME,
    "Reference" TEXT,
    FOREIGN KEY("Payment_Type_ID") REFERENCES "Payment_Type"("Payment_Type_ID"),
    FOREIGN KEY("Payment_Status_ID") REFERENCES "Payment_Status"("Payment_Status_ID")
);

-- Tabla Restaurant
DROP TABLE IF EXISTS "Restaurant";
CREATE TABLE IF NOT EXISTS "Restaurant" (
    "Restaurant_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Category_ID" INTEGER NOT NULL,
    "Menu_ID" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Address" TEXT,
    "Description" TEXT,
    "Email" TEXT,
    "Password" TEXT,
    "Phone" TEXT,
    "Opening_Hour" INTEGER,
    "Closing_Hour" INTEGER,
    FOREIGN KEY("Category_ID") REFERENCES "Restaurant_Category"("Category_ID"),
    FOREIGN KEY("Menu_ID") REFERENCES "Menu"("Menu_ID")
);

-- Tabla Order
DROP TABLE IF EXISTS "Order";
CREATE TABLE IF NOT EXISTS "Order" (
    "Order_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Client_ID" INTEGER NOT NULL,
    "Restaurant_ID" INTEGER NOT NULL,
    "Order_Detail_ID" INTEGER NOT NULL,
    "Order_Status_ID" INTEGER NOT NULL,
    "Delivery_Person_ID" INTEGER,
    "Payment_ID" INTEGER,
    "Date" DATE,
    "Time" DATETIME,
    "Total" DECIMAL(5, 1),
    "Delivery_Address" TEXT,
    FOREIGN KEY("Client_ID") REFERENCES "Client"("Client_ID"),
    FOREIGN KEY("Restaurant_ID") REFERENCES "Restaurant"("Restaurant_ID"),
    FOREIGN KEY("Order_Detail_ID") REFERENCES "Order_Detail"("Order_Detail_ID"),
    FOREIGN KEY("Order_Status_ID") REFERENCES "Order_Status"("Order_Status_ID"),
    FOREIGN KEY("Delivery_Person_ID") REFERENCES "Delivery_Person"("Delivery_Person_ID"),
    FOREIGN KEY("Payment_ID") REFERENCES "Payment"("Payment_ID")
);

-- Inserciones iniciales para la tabla Restaurant
INSERT INTO "Restaurant" ("Category_ID", "Menu_ID", "Name", "Address", "Description", "Email", "Password", "Phone", "Opening_Hour", "Closing_Hour")
VALUES (1, 1, 'Burger Place', '123 Fast Food St', 'Delicious burgers', 'burgerplace@example.com', 'password123', '1234567890', 9, 22),
       (2, 2, 'Italiano', '456 Italian St', 'Classic Italian meals', 'italiano@example.com', 'password456', '0987654321', 10, 23);

COMMIT;
