import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productURL: '',
      productName: '',
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
      // filtering through the array of products either by company of user input depending on the provided function
      // then mapping through the results to display either the data or an inline edit form
      this.props.products.filter(this.props.filterFN).map((product) =>
      // checking if productIsEditing variable from state is truthy or falsey
        this.state.productIsEditing === product.id
          ?
          // displaying an inline editing form
          (<div className="columns" key={product.id} onClick={() => this.props.handleProductLink('company page', product.company)}>
            <div className="column is-one-fourth" ><input name="productURL" value={this.state.productURL} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><input name="productName" value={this.state.productName} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><input name="productMSRP" value={this.state.productMSRP} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><button value={product.id} onClick={((e) => {
              e.preventDefault();
              // const { productName } = this.state;
              // this.props.updateProduct({ ...product, productName });
              // reseting the state back to null/empty from "edit" button event listener
              this.setState({
                productURL: '',
                productName: '',
                productMSRP: '',
                productIsEditing: null
              })
            })
            }>Submit</button></div>
          </div>)
          :
          // displaying basic product data with edit button
          (<div className="columns" key={product.id} >
            <div className="column is-one-fifth"><figure className="image is-96x96">
              <img src={product.logo} />
            </figure></div>
            <div className="column is-one-fifth">{product.name}</div>
            <div className="column is-one-fifth">{product.msrp}</div>
            <div className="column is-one-fifth"><button value={product.id} onClick={((e) => {
              e.preventDefault();
              // setting specific product data for edit form
              this.setState({
                productIsEditing: product.id,
                productURL: product.logo,
                productName: product.name,
                productMSRP: product.msrp,
              });
            })
            } > Edit </button></div>
            <div className="column is-one-fifth"><button value={product.id} onClick={((e) => {
              e.preventDefault();
              // this.props.handleDelete(e.target.value);
            })}>Delete</button></div>
          </div>
          )
      )

    )
  }
}

export default ProductList;