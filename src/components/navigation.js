import React from 'react';
import { connect } from 'react-redux';
import { Row, Tabs } from 'antd';
import { navigate } from '../reducers/navigationReducer';
import Home from './home';
import Shop from './shop';

const Navigation = (props) => {
  const { TabPane } = Tabs;

  return (
    <Row type="flex" justify="center">
      <Tabs defaultActiveKey="1" style={ {width: 500 }}>
        <TabPane tab="Home" key="1">
          <Home />
        </TabPane>
        <TabPane tab="Shop" key="2">
          <Shop
            currencyValue = {props.currencyValue}
            setCurrencyValue = {props.setCurrencyValue}
            purchased={props.purchased}
            setPurchased={props.setPurchased}
          />
        </TabPane>
      </Tabs>
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
