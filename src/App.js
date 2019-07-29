import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Currency from './components/currency';
import { updateInterval } from './reducers/intervalReducer';
import { useInterval } from './hooks/useInterval';

const App = (props) => {
  const [currencyValue, setCurrencyValue] = useState(0);
  const [purchased, setPurchased] = useState([0, 0, 0, 0]);

  useInterval(() => {
    setCurrencyValue(currencyValue + props.interval);
  }, 1000);

  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation 
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
        purchased={purchased}
        setPurchased={setPurchased}
      />
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
    interval: state.interval,
  }
);

const mapDispatchToProps = (
  {
    updateInterval,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
