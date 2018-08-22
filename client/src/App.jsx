import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CompanyView from './components/CompanyView';
import CompanyInfoPage from './components/CompanyInfoPage';
import LandingPage from './components/LandingPage';
import ProductView from './components/ProductView';
import Register from './components/Register';
import Login from './components/Login';
import { fetchCompanies, fetchProducts, saveProduct, modifyProduct, destroyProduct, loginUser, registerUser } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      products: [],
      companies: [],
      userInfo: null,
      currentCompany: null,
    }
    this.handleLinks = this.handleLinks.bind(this);
    this.handleCompanyLink = this.handleCompanyLink.bind(this);
    this.handleProductLink = this.handleProductLink.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit=this.handleRegisterSubmit.bind(this);
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

  handleLoginSubmit(username, password) {
    loginUser({ "username": username, "password": password })
      .then(data => {
        this.setState({
          userInfo: { id: data.id, username: data.username }
        });
        localStorage.setItem( 'token', data.token);
      });
  }

  handleRegisterSubmit(username, password) {
    registerUser({ "username": username, "password": password })
      .then(data => {
        this.setState({
          userInfo: { id: data.id, username: data.username }
        });
        window.localStorage.setItem( "token", data.token);
      });
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
      case 'login page':
        return <Login
        handleLinks={this.handleLinks}
        handleLoginSubmit={this.handleLoginSubmit}
        />;

      case 'register page':
        return <Register
        handleLinks={this.handleLinks}
        handleRegisterSubmit={this.handleRegisterSubmit}
        />;

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
          products={this.state.products}
          handleProductLink={this.handleProductLink}
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
        <Header
          handleLinks={this.handleLinks}
          handleLoginClick={this.handleLoginClick}
        />
        {this.pageView()}
      </div>
    );
  }
}

export default App;
