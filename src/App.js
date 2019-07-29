import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Currency from './components/currency';
import { updateInterval } from './reducers/intervalReducer';
import { useInterval } from './hooks/useInterval';

const App = (props) => {
  const [currencyValue, setCurrencyValue] = useState(0);
  const [newRate, setNewRate] = useState(0);

  const handleClick = () => {
    props.updateInterval(100)
    console.log(newRate);
  }

  useInterval(() => {
    setCurrencyValue(currencyValue + props.interval);
  }, 1000);

  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation 
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}
      />
      <Currency 
        currencyValue={currencyValue}
        setCurrencyValue={setCurrencyValue}  
      />
      <button onClick = {handleClick}>test</button>
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
