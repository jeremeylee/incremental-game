import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Shop from './components/shop';
import Currency from './components/currency';
import currency from './components/currency';

const App = (props) => {
  const [currencyValue, setCurrencyValue] = useState(0);

  const display = () => {
    switch (props.navigation) {
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation />
      {display()}
      <Currency 
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}  
      />
    </div>
  );
};

const mapStateToProps = state => (
  {
    navigation: state.navigation,
  }
);

export default connect(mapStateToProps)(App);
