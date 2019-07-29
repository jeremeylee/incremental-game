import React from 'react';
import { Row } from 'antd';
import ShopItem from './shopItem';
const Shop = (props) => {
  return (
    <div>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeet"
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeeter"
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="ultra yeet"
        />
      </Row>
      <Row type="flex" justify="start">
        <ShopItem 
          label="yeetadakimasu"
        />
      </Row>
    </div>
  )
}

export default Shop;
