import React from 'react';
import ProductList from './ProductList';

function FavoritesView(props) {
  return (
    <div>
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