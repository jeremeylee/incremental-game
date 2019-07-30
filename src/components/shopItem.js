import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'antd';
import { updateCurrency } from '../reducers/currencyReducer';
import { updateInterval } from '../reducers/intervalReducer';

const ShopItem = (props) => {

  const handlePurchase = () => {
    if (props.currencyValue >= props.cost) {
      const newPurchase = [...props.purchased];
      newPurchase[props.index] += 1;
      props.updateCurrency(props.currencyValue - props.cost);
      props.updateInterval(props.rate);
      props.setCurrencyValue(props.currencyValue - props.cost);
      props.setPurchased(newPurchase);
    }
  };


  return (
    <div>
      <Row>
        purchasing this item will increase your clicks by {props.rate} per second and cost {props.cost}
      </Row>
      <Row type="flex" justify="center">
        <Button onClick={handlePurchase}>Purchase</Button>
      </Row>
      
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
