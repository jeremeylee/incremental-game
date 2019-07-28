import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Shop from './components/shop';
import { incrementGold } from './reducers/goldReducer';


const App = (props) => {
  const [currentInterval, setCurrentInterval] = useState(props.interval);
  const [timeoutID, setTimeoutID] = useState(undefined);

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

  const currencyInterval = () => {
    setTimeoutID(() => setTimeout(() => {
      console.log(`interval: ${currentInterval} timeoutID: ${timeoutID}`);
      setCurrentInterval(props.interval);
      props.incrementGold();
      currencyInterval();
    }, 1000000 / currentInterval));
  };

  useEffect(() => {
    console.log('loaded');
    clearTimeout(timeoutID);
    currencyInterval();
  }, [props.interval]);

  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation />
      {display()}
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
    incrementGold,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
