import React from 'react';
import { Row } from 'antd';
import ShopItem from './shopItem';
const Shop = (props) => {
  return (
    <Row type="flex" justify="center">
      <ShopItem 
        label="yeet"
      />
       <ShopItem 
        label="yeeter"
      />
       <ShopItem 
        label="ultra yeet"
      />
       <ShopItem 
        label="yeetadakimasu"
      />

    </Row>
  )
}

export default Shop;
