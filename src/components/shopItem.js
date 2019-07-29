import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button} from 'antd';
import { updateCurrency } from '../reducers/currencyReducer';

const ShopItem = (props) => {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    if (props.currencyValue >= props.cost) {
      updateCurrency(props.currencyValue - props.cost);
      props.setCurrencyValue(props.currencyValue - props.cost);
      setPurchased(true);
    }
  }

  return (
    <div>
      {!purchased ? <Button onClick={handlePurchase}>{props.label} {props.cost}</Button> : <div></div>}
    </div>
    
  )
}

const mapDispatchToProps = (
  {
    updateCurrency,
  }
)
export default connect(null, mapDispatchToProps)(ShopItem);
