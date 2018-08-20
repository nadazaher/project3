DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_founded INT,
    stock_symbol VARCHAR(255), 
    logo TEXT
    );

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES companies(id),
    name VARCHAR(255) NOT NULL,
    msrp TEXT,
    logo TEXT
);

