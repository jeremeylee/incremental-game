import React from 'react';
import { Row } from 'antd';
import ShopItem from './shopItem';
const Shop = (props) => {
  return (
    <div>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeet"
          cost={10}
          rate={1000}
          currencyValue = {props.currencyValue}
          setCurrencyValue = {props.setCurrencyValue}
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeeter"
          currencyValue = {props.currencyValue}
          setCurrencyValue = {props.setCurrencyValue}
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="ultra yeet"
          currencyValue = {props.currencyValue}
          setCurrencyValue = {props.setCurrencyValue}
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeetadakimasu"
          currencyValue = {props.currencyValue}
          setCurrencyValue = {props.setCurrencyValue}
        />
      </Row>
    </div>
  )
}

export default Shop;
