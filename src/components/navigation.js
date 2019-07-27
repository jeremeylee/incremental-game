import React from 'react';
import { connect } from 'react-redux';
import { Row, Menu } from 'antd';
import { navigate } from '../reducers/navigationReducer';

const Navigation = (props) => {
  const handleClick = (menu) => {
    props.navigate(menu.key);
  };
  return (
    <Row type="flex" justify="center">
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="horizontal"
        onSelect={handleClick}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Shop</Menu.Item>
      </Menu>
    </Row>

  );
};
const mapStateToProps = state => (
  {
    navigation: state.navigation,
  }
);

const mapDispatchToProps = (
  {
    navigate,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
