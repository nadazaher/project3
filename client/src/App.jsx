import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CompanyView from './components/CompanyView';
import CompanyInfoPage from './components/CompanyInfoPage';
import LandingPage from './components/LandingPage';
import ProductView from './components/ProductView';
import { fetchCompanies, fetchProducts, saveProduct, modifyProduct, destroyProduct } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      products: [],
      companies: [],
      currentCompany: {
        "id": 1,
        "name": "PepsiCo",
        "date_founded": 1898,
        "stock_symbol": "https://www.nasdaq.com/symbol/pep",
        "logo": "http://purepng.com/public/uploads/large/purepng.com-pepsico-logologobrand-logoiconslogos-251519939772eazsw.png"
      },
    }
    this.handleLinks = this.handleLinks.bind(this);
    this.handleCompanyLink = this.handleCompanyLink.bind(this);
    this.handleProductLink = this.handleProductLink.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    fetchCompanies()
      .then(data => this.setState({ companies: data.companies }));

    fetchProducts()
      .then(data => this.setState({ products: data }));
  }

  handleLinks(viewName) {
    this.setState({
      currentView: viewName
    })
  }

  handleCompanyLink(viewName, company) {
    this.setState({
      currentView: viewName,
      currentCompany: company
    })
  }

  handleProductLink(viewName, companyName) {
    const company = this.state.companies.find((company) => company.name === companyName);
    this.setState({
      currentView: viewName,
      currentCompany: company
    })
  }

  createProduct(product) {
    saveProduct(product)
      .then(data => fetchProducts())
      .then(data => {
        this.setState({ products: data });
      });
  }

  updateProduct(product) {
    modifyProduct(product)
      .then(data => fetchProducts())
      .then(data => {
        this.setState({ products: data });
      })

  }
  deleteProduct(product) {
    destroyProduct(product)
      .then(data => fetchProducts())
      .then(data => {
        this.setState({ products: data });
      })
  }

  pageView() {
    const { currentView } = this.state;

    switch (currentView) {
      case 'companies index':
        return <CompanyView
          companies={this.state.companies}
          handleCompanyLink={this.handleCompanyLink}
        />;
      case 'company page':
        return <CompanyInfoPage
          products={this.state.products}
          currentCompany={this.state.currentCompany}
          handleProductLink={this.handleProductLink}
          deleteProduct={this.deleteProduct}
          updateProduct={this.updateProduct}
        />;
      case 'products index':
        return <ProductView
          deleteProduct={this.deleteProduct}
          updateProduct={this.updateProduct}
          createProduct={this.createProduct}
        />;
      default:
        return <LandingPage />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header handleLinks={this.handleLinks} />
        {this.pageView()}
      </div>
    );
  }
}

export default App;
