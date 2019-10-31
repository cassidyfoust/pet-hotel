CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(25)
);

CREATE TABLE "pets" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(180),
"breed" VARCHAR(50),
"color" VARCHAR(50),
"checked_in" boolean DEFAULT FALSE,
"owner_id" INT REFERENCES "owners"
);

INSERT INTO "owners"
    ("name")
VALUES
    ('Cass'),
    ('Lily'),
    ('Jordana');

INSERT INTO "pets"
    ("name", "breed", "color", "owner_id")
VALUES
    ('Lumi', 'cat', 'orange', 1),
    ('Fiddlesticks', 'cat', 'black', 2),
    ('Maddy', 'dog', 'black and white', 3);