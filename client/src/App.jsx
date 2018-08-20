import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CompanyView from './components/CompanyView';
import CompanyInfoPage from './components/CompanyInfoPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "company page",
      companies: [],
      currentCompany: "",
      productList: []
    }
  }

componentDidMount() {
  fetchCompanies()
  .then(data => this.setState({ companies: data.companies}))

  fetchProducts()
  .then(data => this.setState({ companies: data.products}))
}

  pageView() {
    const { currentView } = this.state;

    switch (currentView) {
      case "company index":
      return <CompanyView companies={this.state.companies} />;
      case "company page":
        return <CompanyInfoPage productList={this.state.productList}/>;
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
