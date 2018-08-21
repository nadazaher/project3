import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CompanyView from './components/CompanyView';
import CompanyInfoPage from './components/CompanyInfoPage';
import ProductView from './components/ProductView';
import { fetchCompanies, fetchProducts } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "company page",
      companies: [],
      currentCompany: {
        "id": 1,
        "name": "PepsiCo",
        "date_founded": 1898,
        "stock_symbol": "https://www.nasdaq.com/symbol/pep",
        "logo": "http://purepng.com/public/uploads/large/purepng.com-pepsico-logologobrand-logoiconslogos-251519939772eazsw.png"
    },
      products: []
    }
  }

  componentDidMount() {
    fetchCompanies()
      .then(data => this.setState({ companies: data.companies }));

    fetchProducts()
      .then(data => this.setState({ products: data }));
  }

  pageView() {
    const { currentView } = this.state;

    switch (currentView) {
      case "company index":
        return <CompanyView companies={this.state.companies} />;
      case "company page":
        return <CompanyInfoPage products={this.state.products} currentCompany={this.state.currentCompany} />;
      // case 'product index':
      //   return <ProductView />;
      // default:
      //   return <LandingPage />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.pageView()}

      </div>
    );
  }
}

export default App;
