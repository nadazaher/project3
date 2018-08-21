DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS companies;

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    industry VARCHAR(255),
    headquarters VARCHAR(255),
    date_founded INT,
    stock_symbol VARCHAR(255), 
    logo TEXT
    );

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES companies(id),
    name VARCHAR(255) NOT NULL,
    product_type VARCHAR (255),
    msrp TEXT,
    logo TEXT
);

