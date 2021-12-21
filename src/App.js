import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Services from './components/ServicesComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" color="faded">
          <div className="container">
            <NavbarBrand href="/">RLX</NavbarBrand>
          </div>
        </Navbar>
        <Services />
      </div>
    );
  }
}

export default App;
