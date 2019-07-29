import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { updateCurrency } from '../reducers/currencyReducer';
import { updateInterval } from '../reducers/intervalReducer';

const ShopItem = (props) => {
  const [purchased, setPurchased] = useState(false);

  const currencyInterval = () => {
    if (props.interval) {
      clearInterval(props.interval);
    } else {
      const intervalID = setInterval(() => {
        console.log(props.currencyValue);
        props.setCurrencyValue(props.currencyValue + 1);
      }, 1000000/props.rate)
      updateInterval(intervalID);
    }
  };

  const handlePurchase = () => {
    if (props.currencyValue >= props.cost) {
      updateCurrency(props.currencyValue - props.cost);
      props.setCurrencyValue(props.currencyValue - props.cost);
      setPurchased(true);
      currencyInterval();
    }
    
  };


  return (
    <div>
      {!purchased ? <Button onClick={handlePurchase}>{props.label} {props.cost}</Button> : <div></div>}
    </div>
    
  )
}

const mapStateToProps = state => (
  {
    interval: state.interval,
  }
)

const mapDispatchToProps = (
  {
    updateCurrency,
    updateInterval,
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
