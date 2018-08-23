DELETE FROM companies;
INSERT INTO companies (name, description, industry, headquarters, date_founded, stock_symbol, logo) VALUES

('PepsiCo',
    'PepsiCo, Inc. is an American multinational food, snack, and beverae corporation with interests in the manufacturing, marketing, and distribution of grain-based snack foods, beverages, and other products as well. PepsiCo was formed with the merger of the Pepsi-Cola Company and Frito-Lay, Inc. PepsiCo has since expanded from its namesake product Pepsi to a broader range of food and beverage brands, the largest of which included an acquisition of Tropicana Products in 1998 and the Quaker Oats Company in 2001, which added the Gatorade brand to its portfolio. Based on net revenue, PepsiCo is the second largest food and beverage business in the world. Within North America, PepsiCo is the largest food and beverage business by net revenue.',
    'Beverages & Food processing',
    'Purchase, New York',
    '1898', 
    'https://www.nasdaq.com/symbol/pep', 
    'http://purepng.com/public/uploads/large/purepng.com-pepsico-logologobrand-logoiconslogos-251519939772eazsw.png'
),

('Unilever',
'Unilever is a British-Dutch transnational consumer goods company. Its products include food and beverages (about 40 percent of its revenue), cleaning agents and personal care products. It is the world\''s largest consumer goods company, one of the oldest multinational companies, and its products are available in around 190 countries. Unilever is organized into four main divisions – Foods, Refreshment (beverages and ice cream), Home Care, and Personal Care. In 2015, the company started gradually shifted its focus towards health and beauty brands and away from food brands showing slow growth',
'Consumer goods',
'Rotterdam, Netherlands',
'1930',
'https://www.nyse.com/quote/XNYS:UN',
'http://www.stickpng.com/assets/images/5856a7bb4f6ae202fedf276b.png'
);

DELETE FROM products; 
INSERT INTO products (company_id, name, product_type, msrp, logo)VALUES

(1, 
'Lays',
'Potato chips',
'$1',
'https://img.grouponcdn.com/stores/4NmC7rKZgJ6iHGfJxwCCcqy8SYrC/storespi2236635-1040x640/v1/c700x420.jpg'
),


(1, 
'7UP',
'Lemon-lime drink',
'$1',
'https://185606-546971-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2009/05/7up-330ml-can.jpg'
),

(1, 
'Chewy Bars',
'Granola bar',
'$2',
'https://www.ldproducts.com/media/catalog/product/cache/3/image/730x/9df78eab33525d08d6e5fb8d27136e95/2/0/2000_1030323986.jpg'
),

(2,
 'Dove',
 'Personal care',
 '$2',
 'https://diapercitygh.com/wp-content/uploads/2018/02/DOVE-SOAP.png'
),

(2,
'Lipton',
'Tea & Infusions',
'$3',
'http://couponkarma.com/wp-content/uploads/2016/03/Lipton-Tea-Coupon-K-3.23-e1458751344724.png'
),

(2,
'Magnum',
'Ice Cream',
'$3',
'https://4.imimg.com/data4/HH/NV/GLADMIN-16687741/1-500x500.jpg'
);

DELETE FROM users; 
INSERT INTO users (username, password_digest)VALUES
( 'zane','$2a$10$F7eUsJ4pTGYclWXe14e6heIyGqcx/6FIgUh3eOxJeEYjM4E1lHPse' );

DELETE FROM favorites; 
INSERT INTO favorites (user_id, product_id)VALUES
( 1, 1 ) 