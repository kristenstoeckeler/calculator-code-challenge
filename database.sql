/*This is the sql statement that created my simple database*/
CREATE TABLE "calculation" (
    "id" SERIAL PRIMARY KEY,
    "val1" INT NOT NULL,
    "val2" INT NOT NULL,
    "operator" VARCHAR (1) NOT NULL,
    "result" INT
);

