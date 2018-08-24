import React from 'react';
import ProductList from './ProductList';

function FavoritesView(props) {
  return (
    <div>
      {
        props.countFavorites.filter(favorite => favorite.length).map((favorite) => 
        (<div key={favorite[0].name}>{favorite[0].name}:&nbsp;{(parseInt(favorite[0].count)/props.favorites.length) * 100}%</div>)
      )
      }
      <div>
        <h1 className="favoritestitle">
        My favorite products:
        </h1>
        <hr className="line"></hr>
        <ProductList
          filterFN={(product) => product.user_id === props.userInfo.id}
          handleProductLink={props.handleProductLink}
          deleteFavorite={props.deleteFavorite}
          deleteProduct={props.deleteProduct}
          updateProduct={props.updateProduct}
          addFavorite={props.addFavorite}
          favorites={props.favorites}
          companies={props.companies}
          products={props.favorites}
          userInfo={props.userInfo}
        />
      </div>
    </div>
  )
}






export default FavoritesView;