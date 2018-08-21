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
      this.props.products.filter(this.props.filterFN).map((product) =>
        this.state.productIsEditing === product.id
          ?
          (<div className="columns" key={product.id}>
            <div className="column is-one-fourth" ><input name="productURL" value={this.state.productURL} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><input name="productName" value={this.state.productName} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><input name="productMSRP" value={this.state.productMSRP} type="text" onChange={this.handleChange} /></div>
            <div className="column is-one-fourth" ><button value={product.id} onClick={((e) => {
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
            }>Submit</button></div>
          </div>)
          :
          (<div className="columns" key={product.id} >
            <div className="column is-one-fifth"><figure className="image is-96x96">
              <img src={product.logo} />
            </figure></div>
            <div className="column is-one-fifth">{product.name}</div>
            <div className="column is-one-fifth">{product.msrp}</div>
            <div className="column is-one-fifth"><button value={product.id} onClick={((e) => {
              e.preventDefault();
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