import React, { Component } from 'react';

class CompanyInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productIsEditing: null,
    }
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
        {console.log(this.props.products)}
        {
          this.props.productList.map((product, idx) =>
            this.state.productIsEditing === product ? (
              <div key={idx}>
                <input name="productName" value={this.state.productName} type="text" onChange={this.handleChange} />
                <button value={product} onClick={((e) => {
                  e.preventDefault();
                  const { productName } = this.state;
                  this.props.updateProduct({ ...product, productName });
                  this.setState({
                    isEditing: '',
                    productName: '',
                    productIsEditing: null,
                  })
                })
                }>Submit</button>
              </div>) : (<div key={idx} > {product} </div>)
          )
        }
      </div>
    )
  }
}

export default CompanyInfoPage;