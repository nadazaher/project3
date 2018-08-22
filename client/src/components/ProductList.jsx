import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//productList is a controlled component so we need to set state

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productURL: '',
      productName: '',
      productType: '',
      productMSRP: '',
      productIsEditing: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="scrollable">
         {/* filtering through the array of products either by company of user input depending on the provided function
         then mapping through the results to display either the data or an inline edit form */}
        {this.props.products.filter(this.props.filterFN).map((product) =>
          // checking if productIsEditing variable from state is truthy or falsey
          this.state.productIsEditing === product.id
            ?
            // displaying an inline editing form
            (<div className="columns" key={product.id} >
              <div className="column is-one-fourth" ><input name="productURL" value={this.state.productURL} type="text" onClick={((e) => e.stopPropagation())} onChange={this.handleChange} /></div>
              <div className="column is-one-fourth" ><input name="productName" value={this.state.productName} type="text" onClick={((e) => e.stopPropagation())} onChange={this.handleChange} /></div>
              <div className="column is-one-fourth" ><input name="productType" value={this.state.productType} type="text" onClick={((e) => e.stopPropagation())} onChange={this.handleChange} /></div>
              <div className="column is-one-fourth" ><input name="productMSRP" value={this.state.productMSRP} type="text" onClick={((e) => e.stopPropagation())} onChange={this.handleChange} /></div>
              <div className="column is-one-fourth" ><button value={product.id} onClick={((e) => {
                e.preventDefault();
                e.stopPropagation();

                // deconstructing state here because the variable comes from the database as an object and we want to reset the values for each key
                const { productName, productURL, productType, productMSRP } = this.state;
                // ... lets you unpack the keys from the object
                // name is how its in our database, but productName is how you want it to be set in here

                // this will send our updated data to database
                this.props.updateProduct({ ...product, name: productName, product_type: productType, logo: productURL, msrp: productMSRP });
                // resetting the productIsEditing state back to null/empty from "edit" button event listener so we can go back to seeing product list item
                this.setState({
                  productURL: '',
                  productName: '',
                  productType: '',
                  productMSRP: '',
                  productIsEditing: null
                })
              })
              }>Submit</button></div>
            </div>)
            :
            // displaying basic product data with edit button
            (<div className="columns" key={product.id} onClick={() => this.props.handleProductLink('company page', product.company)}>
              <div className="column is-one-sixth"><figure className="image is-96x96">
                <img src={product.logo} />
              </figure></div>
              <div className="column is-one-sixth">{product.name}</div>
              <div className="column is-one-sixth">{product.product_type}</div>
              <div className="column is-one-sixth">{product.msrp}</div>
              <div className="column is-one-sixth"><button value={product.id} onClick={((e) => {
                e.preventDefault();
                e.stopPropagation();
                // setting specific product data for edit form - edit presets values in input form, setState will allow you to change the state/input in those fields when editing
                this.setState({
                  productIsEditing: product.id,
                  productURL: product.logo,
                  productName: product.name,
                  productType: product.product_type,
                  productMSRP: product.msrp,
                });
              })
              } > Edit </button></div>

            {/* // creating delete button */}
              <div className="column is-one-sixth"><button value={product.id} onClick={((e) => {
                e.preventDefault();

           // stopPropogation keeps the event from following the click that happens to the entire div
                e.stopPropagation();
            // takes id of product and deletes it from database
                this.props.deleteProduct(e.target.value);
              })}>Delete</button></div>
            </div>
            )
        )}
      </div>
    )
  }
}

export default ProductList;