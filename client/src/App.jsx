import React, { Component } from 'react';
import './App.css';
import CompanyInfoPage from './components/CompanyInfoPage';
import FavoritesView from './components/FavoritesView';
import CompanyView from './components/CompanyView';
import LandingPage from './components/LandingPage';
import ProductView from './components/ProductView';
import Register from './components/Register';
import HeaderOne from './components/HeaderOne';
import Login from './components/Login';
import { fetchCompanies, fetchProducts, saveProduct, modifyProduct, destroyProduct, loginUser, registerUser, fetchFavorites } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      products: [],
      companies: [],
      userInfo: null,
      currentCompany: null,
      favorites: null,
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
    this.handleCompanyLink = this.handleCompanyLink.bind(this);
    this.handleProductLink = this.handleProductLink.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.handleLinks = this.handleLinks.bind(this);
  }

  // default for React - when App loads synchronously make all these funcitions - get products and get companies - change setState when page loads to have data - this function never gets called

  componentDidMount() {
    fetchCompanies()
      .then(data => this.setState({ companies: data.companies }));

    fetchProducts()
      .then(data => this.setState({ products: data }));

    fetchFavorites()
      .then(data => this.setState({ favorites: data }));
  }

  // handleLinks the currentview of value in state - this will let us reset currentView as needed by using handleLinks('desired view name') -- notice currentView is set as '' in this.state above
  handleLinks(viewName) {
    this.setState({
      currentView: viewName
    })
  }

  // this is explaining both functions below handleLoginSubmit adn handleRegisterSubmit - takes parameters username and password - calls respevtive loginUser or registerUser function from api.js - 
  handleLoginSubmit(username, password) {
    loginUser({ "username": username, "password": password })
      .then(data => {
        this.setState({
          userInfo: { id: data.id, username: data.username }
        });
        localStorage.setItem('token', data.token);
      })
      .catch(err => console.log("test"));
  }

  handleRegisterSubmit(username, password) {
    registerUser({ "username": username, "password": password })
      .then(data => {
        this.setState({
          userInfo: { id: data.id, username: data.username }
        });
        window.localStorage.setItem("token", data.token);
      });
  }

  handleLogoutSubmit() {
    this.setState({ userInfo: null });
    window.localStorage.clear();
  }

  // similar to handleLinks but handleCompanyLink allows you to take in ('desired view', company ) to know which company to display - passed 2nd variable company from map function -- notice currentCompany is set as nul; in this.state above
  handleCompanyLink(viewName, company) {
    this.setState({
      currentView: viewName,
      currentCompany: company
    })
  }
  // when you click on the whole div of the product, it should then take the respective name of the company to find the one that equals to the ones we passed - then takes you to the company page - parameter companyName couldve been called anything

  handleProductLink(viewName, companyName) {
    const company = this.state.companies.find((company) => company.name === companyName);
    this.setState({
      currentView: viewName,
      currentCompany: company
    })
  }

  // this is explaining createProduct, updateProduc, and deleteProduct
  // saveProduct, modifyProduct, and destroyProduct functions are called from services/api.js respectively
  // fetchProducts brings back all the products
  // setState to products brings the new data we got back
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

  // pageView (switch-case function) will check the currentView and return the respective page - this is how you are able to change view on the fly without reloading - need to pass down functions here so you can use them in child components as this.props
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
          companies={this.state.companies}
          products={this.state.products}
          handleProductLink={this.handleProductLink}
          deleteProduct={this.deleteProduct}
          updateProduct={this.updateProduct}
          createProduct={this.createProduct}
        />;
        case 'favorites page':
        return <FavoritesView 
        userInfo={this.state.userInfo}
        products={this.state.products}

        />;
      case 'favorites page':
        return <FavoritesView
          companies={this.state.companies}
          favorites={this.state.favorites}
          handleProductLink={this.state.handleProductLink}
          deleteProduct={this.state.deleteProduct}
          updateProduct={this.state.updateProduct}
          userInfo={this.state.userInfo}
        />
      default:
        return <LandingPage 
        handleLinks={this.handleLinks}
        />;

    }
  }

  // render static header on every page
  // pass through handleLinks and handleLoginClick because we have clickable login in the header

  render() {
    return (
      <div className="App">
        <HeaderOne
          userInfo={this.state.userInfo}
          handleLinks={this.handleLinks}
          handleLoginClick={this.handleLoginClick}
        />
        {this.pageView()}
      </div>
    );
  }
}

export default App;
