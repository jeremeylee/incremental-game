import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { updateCurrency } from '../reducers/currencyReducer';
import { updateInterval } from '../reducers/intervalReducer';

const ShopItem = (props) => {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    if (props.currencyValue >= props.cost) {
      props.updateCurrency(props.currencyValue - props.cost);
      props.updateInterval(props.rate);
      props.setCurrencyValue(props.currencyValue - props.cost);
      setPurchased(true);
    }

  };


  return (
    <div>
      {!purchased ? <Button onClick={handlePurchase}>
          {props.label} 
          {' '}
          {props.cost}
        </Button> : <div />}
    </div>

  );
};

const mapStateToProps = state => (
  {
    interval: state.interval,
  }
);

const mapDispatchToProps = (
  {
    updateCurrency,
    updateInterval,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
