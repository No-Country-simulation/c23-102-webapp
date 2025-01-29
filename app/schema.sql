BEGIN TRANSACTION;
DROP TABLE IF EXISTS "Category";
CREATE TABLE IF NOT EXISTS "Category" (
	"Name"	TEXT NOT NULL,
	PRIMARY KEY("Name")
);
INSERT INTO "Category" ("Name") VALUES ('Restaurante');
INSERT INTO "Category" ("Name") VALUES ('Cafetería');
INSERT INTO "Category" ("Name") VALUES ('Bar');
INSERT INTO "Category" ("Name") VALUES ('Heladería');
INSERT INTO "Category" ("Name") VALUES ('Tienda de abarrotes');
COMMIT;
