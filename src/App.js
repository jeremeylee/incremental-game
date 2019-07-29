import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Currency from './components/currency';

const App = (props) => {
  const [currencyValue, setCurrencyValue] = useState(0);

  
  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation />
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
