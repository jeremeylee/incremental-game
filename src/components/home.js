import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Currency from './currency';
import { incrementGold } from '../reducers/goldReducer';

const Home = (props) => {
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
    <Currency />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
