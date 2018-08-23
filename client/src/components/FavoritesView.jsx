import React from 'react';
import ProductList from './ProductList';

function FavoritesView(props) {
  return (
    <div>
      <div>
        List of my favorites:
        <ProductList
          companies={props.companies}
          products={props.favorites}
          filterFN={(product) => product.user_id === props.userInfo.id}
          handleProductLink={props.handleProductLink}
          deleteProduct={props.deleteProduct}
          updateProduct={props.updateProduct}
          userInfo={props.userInfo}
        />
      </div>
    </div>
  )
}






export default FavoritesView;