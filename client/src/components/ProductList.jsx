import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

        <div className="columns">
          <div className="column is-one-seventh top"> Image </div>
          <div className="column is-one-seventh top"> Name </div>
          <div className="column is-one-seventh top"> Type </div>
          <div className="column is-one-seventh top"> MSRP </div>
          <div className="column is-one-seventh top"> Edit </div>
          <div className="column is-one-seventh top"> Delete </div>
          <div className="column is-one-seventh top"> Favorite </div>
        </div>
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

            (<div className="container3">
              <div className="columns" key={product.id} onClick={() => this.props.handleProductLink('company page', product.company)}>
                <div className="column is-one-seventh"><img src={product.logo} className="pimg" /></div>
                <div className="column is-one-seventh" >{product.name}</div>
                <div className="column is-one-seventh">{product.product_type}</div>
                <div className="column is-one-seventh">{product.msrp}</div>
                <div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // setting specific product data for edit form - edit presets values in input form, setState will allow you to change the state/input in those fields when editing
                  this.props.userInfo
                    ?
                    this.setState({
                      productIsEditing: product.id,
                      productURL: product.logo,
                      productName: product.name,
                      productType: product.product_type,
                      productMSRP: product.msrp,
                    })
                    :
                    this.props.handleLinks('login page')

                })
                } >  <FontAwesomeIcon icon="pencil-alt" />

                </button></div>

                {/* // creating delete button */}
                <div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                  e.preventDefault();
                  // stopPropogation keeps the event from following the click that happens to the entire div
                  e.stopPropagation();
                  // takes id of product and deletes it from database
                  this.props.userInfo
                    ?
                    this.props.deleteProduct(product.id)
                    :
                    this.props.handleLinks('login page')
                })}><FontAwesomeIcon icon="trash-alt" /></button></div>
                {/* favorite button */}
                {/* checking to see if there is a user logged in and if they have favorites. then we check if the current product is in there favorites */}
                {
                  this.props.userInfo
                    &&
                    this.props.favorites.filter(favorite => favorite.user_id === this.props.userInfo.id)
                    &&
                    (this.props.favorites.filter(favorite => favorite.user_id === this.props.userInfo.id).map((idx) => idx.id).includes(product.id))
                    ?
                    // display a solid heart button is the current product is in the users favorties  
                    (<div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                      e.preventDefault();
                      // stopPropogation keeps the event from following the click that happens to the entire div
                      e.stopPropagation();
                      let currentFavorite = this.props.favorites.filter((favorite) => favorite.id === product.id).filter(favorite => favorite.user_id === this.props.userInfo.id);
                      this.props.deleteFavorite(currentFavorite[0].favorite_id);
                    })}><FontAwesomeIcon icon={["fas", "heart"]} /></button></div>)
                    :
                    // display a hollow heart button is the current product is not in the users favorties  
                    (<div className="column is-one-seventh"><button className="edit-delete-favorite-button" value={product.id} onClick={((e) => {
                      e.preventDefault();
                      // stopPropogation keeps the event from following the click that happens to the entire div
                      e.stopPropagation();
                      this.props.userInfo
                        ?
                        this.props.addFavorite({ user_id: this.props.userInfo.id, product_id: product.id })
                        :
                        this.props.handleLinks('login page')
                    })}><FontAwesomeIcon icon={["far", "heart"]} /></button></div>)
                }
              </div>
            </div>
            )
        )}
      </div>
    )
  }
}

export default ProductList;



