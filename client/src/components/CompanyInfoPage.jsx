import React from 'react';
import ProductList from './ProductList';

function CompanyInfoPage(props) {

  return (
    <div>
      <div className="columns">
        <div className="column">
          <figure className="image">
            {/* // use .currentCompany because thats how its set in state in app.jsx using props since you are sendind these components down from the state in app.jsx - no need for this.props because its a function not class component */}
            <img src={props.currentCompany.logo} />
          </figure>
          <div>{props.currentCompany.description}</div>
        </div>
        <div className="column">
          <div>{props.currentCompany.name}</div>
          <hr />
          {/* // nsbp = non breaking space - doesnt break to new line but creates a space */}
          <div><strong>Date founded:</strong>&nbsp;{props.currentCompany.date_founded}</div>
          <div><strong>Industry:</strong>&nbsp;{props.currentCompany.industry}</div>
          <div><strong>Headquarters:</strong>&nbsp;{props.currentCompany.headquarters}</div>
          {!(props.currentCompany.stock_symbol === "private") &&(<div><a href={props.currentCompany.stock_symbol}>Stock info</a></div>)}
        </div>
      </div>
      <hr />
      <p> Products </p>
      <hr />
      <ProductList
        // passing all these functions as props since they are being brought down from state ProductList.jsx 
        filterFN={((product => product.company === props.currentCompany.name))}
        handleProductLink={props.handleProductLink}
        deleteFavorite={props.deleteFavorite}
        deleteProduct={props.deleteProduct}
        updateProduct={props.updateProduct}
        addFavorite={props.addFavorite}
        handleLinks={props.handleLinks}
        favorites={props.favorites}
        userInfo={props.userInfo}
        products={props.products}
      />
    </div >
  )
}

export default CompanyInfoPage;