import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Shop from './components/shop';
import { incrementGold } from './reducers/goldReducer';


const App = (props) => {
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
    setTimeout(() => {
      console.log('interval: ', props.interval);
      props.incrementGold();
      currencyInterval();
    }, props.interval);
  };

  useEffect(() => {
    console.log('loaded');
    currencyInterval();
  },[]);
  return (
    <div className="App">
      <h2>Yeet Clicker 2000</h2>
      <Navigation />
      {display()}
    </div>
  );
}

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
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
