DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT DEFAULT '',
    industry VARCHAR(255) DEFAULT '',
    headquarters VARCHAR(255) DEFAULT '',
    date_founded INT DEFAULT 1066,
    stock_symbol VARCHAR(255) DEFAULT '', 
    logo TEXT DEFAULT ''
    );

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES companies(id) DEFAULT '',
    name VARCHAR(255) NOT NULL,
    product_type VARCHAR (255),
    msrp TEXT DEFAULT '',
    logo TEXT DEFAULT ''
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL DEFAULT '',
    password_digest VARCHAR(255) NOT NULL DEFAULT ''
)

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id)
)



