import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CompanyView from './components/CompanyView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
    companies:["Cocacola","Kellogs","Mars","Unilever"]
  }
}
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <Header />
        <CompanyView companies={this.state.companies}/>

      </div>
    );
  }
}

export default App;
