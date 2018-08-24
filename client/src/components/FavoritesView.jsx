import React from 'react';
import ProductList from './ProductList';
import PieChart from "react-svg-piechart"

function FavoritesView(props) {
  return (
    <div>
      <h1 className="favoritestitle">
        My Favorite Products
        </h1>
    <div className="rows">
        <div className="row">
        <div className="pieinfo">
          {
            props.countFavorites.filter(favorite => favorite.length).map((favorite) =>
              (<div className="stats" key={favorite[0].name}>{favorite[0].name}:&nbsp;{((parseInt(favorite[0].count) / props.favorites.length) * 100).toFixed(2)}%</div>)
            )
          }
        </div>
        
        <div className="row">
        <div className="piechart">
        <PieChart
          data={props.favoritesStats}
          expandOnHover={true}
          expandSize={5}
          shrinkOnTouchEnd={false}
          strokeColor="#fff"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBoxSize={25}
        /></div></div>
        </div>
      </div>
      <div>
      
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