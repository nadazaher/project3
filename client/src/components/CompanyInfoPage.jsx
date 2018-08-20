import React, { Component } from 'react';

class CompanyInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productURL: '',
      productName: '',
      productMSRP: '',
      productIsEditing: null,
    }
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
        <div className="columns">
          <div className="column">company name</div>
          <div className="column">company info</div>
        </div>
        <hr />
        <p> Products </p>
        <hr />
        {
          this.props.products.map((product) =>
            this.state.productIsEditing === product.id ? (
              <div key={product.id}>
                <input name="productURL" value={this.state.productURL} type="text" onChange={this.handleChange} />
                <input name="productName" value={this.state.productName} type="text" onChange={this.handleChange} />
                <input name="productMSRP" value={this.state.productMSRP} type="text" onChange={this.handleChange} />
                <button value={product.id} onClick={((e) => {
                  e.preventDefault();
                  // const { productName } = this.state;
                  // this.props.updateProduct({ ...product, productName });
                  this.setState({
                    productURL: '',
                    productName: '',
                    productMSRP: '',
                    productIsEditing: null
                  })
                })
                }>Submit</button>
              </div>) : (<div key={product.id} >
                <figure className="image is-96x96">
                  <img src={product.logo} />
                </figure>
                {product.name}
                {product.msrp}
                <button value={product.id} onClick={((e) => {
                  e.preventDefault();
                  this.setState({
                    productIsEditing: product.id,
                    productURL: product.logo,
                    productName: product.name,
                    productMSRP: product.msrp,
                  });
                })
                } > Edit </button>
              </div>
              )
          )
        }
      </div>
    )
  }
}

export default CompanyInfoPage;