import React from 'react';
import ProductList from './ProductList';

function CompanyInfoPage(props) {

  return (
    <div>
      <div className="columns">
        <div className="column">company logo</div>
        <div className="column">company info</div>
      </div>
      <hr />
      <p> Products </p>
      <hr />
      <ProductList products={props.products} filterFN={((product => product.company === props.filterInput))}/>
    </div >
  )
}

export default CompanyInfoPage;