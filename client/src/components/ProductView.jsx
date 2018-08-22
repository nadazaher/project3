import React, { Component } from 'react';
import ProductList from './ProductList';

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      filterList: [],
      productURL: '',
      productName: '',
      productType: '',
      productMSRP: '',
    }
    this.setInput = this.setInput.bind(this);
    this.filterFN = this.filterFN.bind(this);
    this.handleChange = this.handleChange.bind(this)

  }

  //defines a filterFn that allows you to search upper or lower case - check if if product name (which is a string) includes what the user is typing - this is being called in productList .map
  filterFN(product) {
    return product.name.toUpperCase().includes(this.state.inputValue.toUpperCase())
  }
  //sets input value in state to value of whats printing out in input field (e.target.value)
  setInput(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        // this allows you to search through 
        <input
          type="text"
          placeholder="Search for a product"
          value={this.state.inputValue}
          onChange={this.setInput}
        />
        <ProductList products={this.props.products}
          filterFN={this.filterFN}
          handleProductLink={this.props.handleProductLink}
          deleteProduct={this.props.deleteProduct}
          updateProduct={this.props.updateProduct} />
          <hr/>
        <div className="bottom">
          <input name="productURL" placeholder="Logo URL" value={this.state.productURL} type="text" onChange={this.handleChange} />
          <input name="productName" placeholder="Product name" value={this.state.productName} type="text" onChange={this.handleChange} />
          <input name="productType" placeholder="Product type" value={this.state.productType} type="text" onChange={this.handleChange} />
          <input name="productMSRP" placeholder="MSRP" value={this.state.productMSRP} type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </div>
      </div>
    )
  }


}

export default ProductView;
