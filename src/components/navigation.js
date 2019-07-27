import React from 'react';
import { Menu } from 'antd';

const Navigation = (props) => {
  const { SubMenu } = Menu;
  
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      mode="horizontal"
    >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Shop</Menu.Item>
      </Menu>
  );
};

export default Navigation;
