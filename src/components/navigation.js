import React from 'react';
import { Row, Menu } from 'antd';

const Navigation = (props) => {

  return (
    <Row type="flex" justify="center">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="horizontal"
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Shop</Menu.Item>
      </Menu>
    </Row>

  );
};

export default Navigation;
