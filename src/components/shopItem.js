import React from 'react';
import { Button, Menu } from 'antd';

const ShopItem = (props) => {
  return (
    <Menu
        style={{ width: 256 }}
        mode="vertical"
      >
        <Menu.Item >{props.label}</Menu.Item>
      </Menu>
  )
}

export default ShopItem;
