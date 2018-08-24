import React from 'react';
import ProductList from './ProductList';
import PieChart from "react-svg-piechart"

function FavoritesView(props) {
  return (

    <div>
      <div className="columns">
      <div className="column piechart">
        <PieChart
          data={props.favoritesStats}
          expandOnHover={true}
          expandSize={1}
          shrinkOnTouchEnd={false}
          strokeColor="#fff"
          strokeLinejoin="round"
          strokeWidth={0}
          viewBoxSize={10}
        />
      </div>
      <div className="column">
      {
        props.countFavorites.filter(favorite => favorite.length).map((favorite) =>
          (<div key={favorite[0].name}>{favorite[0].name}:&nbsp;{((parseInt(favorite[0].count) / props.favorites.length) * 100).toFixed(2)}%</div>)
        )
      }
      </div>
      </div>
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
    </div >
  )
}






export default FavoritesView;