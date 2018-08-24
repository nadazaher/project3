import React from 'react';
import ProductList from './ProductList';

function FavoritesView(props) {
  return (
    <div>
      <div>
        List of my favorites:
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