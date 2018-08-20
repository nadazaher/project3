DELETE FROM companies;
INSERT INTO companies (name, date_founded, stock_symbol, logo) VALUES

('PepsiCo',
    '1898', 
    'https://www.nasdaq.com/symbol/pep', 
    'http://purepng.com/public/uploads/large/purepng.com-pepsico-logologobrand-logoiconslogos-251519939772eazsw.png'
);

DELETE FROM products; 
INSERT INTO products (company_id, name, MSRP, logo) VALUES
(1, 
'Lays',
'$1',
'http://logok.org/wp-content/uploads/2015/05/Lays-logo-880x660.png'
),


(1, 
'7UP',
'$1',
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/7-up_Logo.svg/1093px-7-up_Logo.svg.png'
),

('1', 
'Chewy Bars',
'$2',
'https://www.preparedfoods.com/ext/resources/images/2016_II/PFNP_2016/QuakerChewy_900.jpg?1474390244'
);
 