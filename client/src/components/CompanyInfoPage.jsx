import React from 'react';
import ProductList from './ProductList';

function CompanyInfoPage(props) {

  return (
    <div>
      <div className="columns">
        <div className="column">
          <figure className="image">
            <img src={props.currentCompany.logo} />
          </figure>
        </div>
        <div className="column">
          <div>{props.currentCompany.name}</div>
          <div>Date founded: {props.currentCompany.date_founded}</div>
          <div></div>
          <div><a href={props.currentCompany.stock_symbol}>Stock info</a></div>
        </div>
      </div>
      <hr />
      <p> Products </p>
      <hr />
      <ProductList products={props.products} filterFN={((product => product.company === props.currentCompany.name))} />
    </div >
  )
}

export default CompanyInfoPage;