import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navigation from './components/navigation';
import Home from './components/home';
import Shop from './components/shop';

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
  }
)

export default connect(mapStateToProps)(App);
