# OneBigTen

![screen shot 2018-08-23 at 8 11 19 pm](https://media.git.generalassemb.ly/user/14932/files/49110598-a712-11e8-89d3-60b1c5f4fbd2)

# Who Makes My Product?
A tool that will inform the user which conglomerates makes some of their favorite and most used products. How many of us know that Breyers, an ice cream brand, and Vaseline, a skincare product, share a parent company, Unilever? The majority of the brands we use daily are made by just 10 multinational conglomerates. By using this website, you can find out which companies make your favorite products and more details about each company. If you don’t see a product listed, you are encouraged to add it to its corresponding parent company. Users can favorite their most used products to then directly see which conglomerate  they are benefitting most. 

## User Stories
User = average consumer/young investor

CREATE, READ, UPDATE, DELETE:
1)	As a user, I would like to create products to a specific conglomerate. 
2)  As a user, I would like to favorite a product that I like/use most often. 
3)	As a user, I would like to know the source of the products I use most often.
4)  As a user, I would like to see a list of my favorite products.
5)	As a user, I would like to know the implications of investing in conglomerates that I use most often.
6)	As a user, I would like to update products from a specific conglomerate. 
7)	As a user, I would like to delete products from a specific conglomerate. 

## Motivation
We were curious to know who were the corporations behind our favorite products. We came across this map showing our various companies and the products they made and that inspired us to make our app. http://www.convergencealimentaire.info/map.jpg

## Setup Instructions
1) Clone this repo down
2) cd into repo
3) cd into app
4) npm i
5) createdb conglomerates_dev
6) npm run db:setup
7) npm run dev
8) in another terminal tab, cd into client
9) yarn install
10) yarn start

## Initial ERD 
![project 3 erd](https://media.git.generalassemb.ly/user/14932/files/f4c24042-a3d3-11e8-93ef-e1e98ab7535c)

## Initial Wireframes
![landing](https://media.git.generalassemb.ly/user/14932/files/0e43ab78-a3d4-11e8-99d5-0f6e62e2a39e)
![company search](https://media.git.generalassemb.ly/user/14932/files/12004df2-a3d4-11e8-9f37-a8ed19c8fad7)
![company info](https://media.git.generalassemb.ly/user/14932/files/13c5a70e-a3d4-11e8-9434-cc9c25a92553)
![product search](https://media.git.generalassemb.ly/user/14932/files/1006adb6-a3d4-11e8-8514-08e678b027ef)

## Thoughts on App Structure

Dependencies:
Made sure to install all the needed dependencies in our package.json before running the servers. 

Database:
We created 4 tables using SQL - Products, Companies, Users, and Favorites. Products had a join to Companies on company_id and Users had a join to favorites on user_id. We seeded a list of the 10 conglomerates and four products for each. 

Backend:
Using Express, we followed the MVC model starting off by creating models to pull from the database, linked them to controller functions, and then created routes for each. In this case we used REACT for views instead of EJX so the frontend took care of the views.

Frontend:
Using React, we created separated components for each page and created a switch function that renders the respective page onClick. 

Fetching from API:
We fetched from our own local API (seeded database). We created fetch functions for each route and made sure to use opts when the request was not just GET.

Users & Authentication:
We used json web tokens to get users and auth working. When a user logs in, JWT returns a token and then we created functions to check if the token of this user matches the next time he/she logs in to manage a successful login. We store tokens in localStorage and then get rid of them when user logs out. 

Linking backend and frontend:
We linked them by imported and requiring cors middleware, 

Design:
We imported Bulma for structured templates and then added our own classNames to style with CSS. We also used icons from fontAwesome for edit, delete, and favorite. 

## Code Snippet

```javascript
{/* favorite button */}
                {/* checking to see if there is a user logged in and if they have favorites. then we check if the current product is in there favorites */}
                {
                  this.props.userInfo
                    &&
                    this.props.favorites.filter(favorite => favorite.user_id === this.props.userInfo.id)
                    &&
                    (this.props.favorites.filter(favorite => favorite.user_id === this.props.userInfo.id).map((idx) => idx.id).includes(product.id))
                    ?
                    // display a solid heart button is the current product is in the users favorties  
                    (<div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                      e.preventDefault();
                      // stopPropogation keeps the event from following the click that happens to the entire div
                      e.stopPropagation();
                      let currentFavorite = this.props.favorites.filter((favorite) => favorite.id === product.id).filter(favorite => favorite.user_id === this.props.userInfo.id);
                      this.props.deleteFavorite(currentFavorite[0].favorite_id);
                    })}><FontAwesomeIcon icon={["fas", "heart"]} /></button></div>)
                    :
                    // display a hollow heart button is the current product is not in the users favorties  
                    (<div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                      e.preventDefault();
                      // stopPropogation keeps the event from following the click that happens to the entire div
                      e.stopPropagation();
                      this.props.userInfo
                        ?
                        this.props.addFavorite({ user_id: this.props.userInfo.id, product_id: product.id })
                        :
                        this.props.handleLinks('login page')
                    })}><FontAwesomeIcon icon={["far", "heart"]} /></button></div>)
                }
```

## Further Description 
This website is designed for young, curious consumers who are also looking to invest in products they generally like and use most often. The goal is for a user to be able to search for a product and find out which conglomerate makes it and vice versa. By knowing the source of his/her products, user can then see a detailed description of the company's stock info and status. Based on that, user can make a more informed decision on whether to invest or not. We also allow users to add/delete/edit/favorite products to/from specific conglomerates. 

## Possibilities post-MVP
- Adding an admin to approve any submissions or edits before being posted
- Matching game for interactivity (users can have high scores)
- React error message when user logs in or registers incorrectly
- Use third-party APIs for company/product info 

## Citations
https://codepen.io/miroot/pen/qwIgC

Our inspiration for the login page came from this codepen.

https://bulma.io/documentation/

We incorporated bulma into our styling.

https://www.paulirish.com/2009/random-hex-color-code-snippets/

Paul Irish is a front end web dev for google. He came up with a genious way to randomly generate hex colors. we incorporated this in our "favorites" piechart
