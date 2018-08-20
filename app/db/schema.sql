\c conglomerates_dev

DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS products;

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
    MSRP TEXT,
    logo TEXT
);

