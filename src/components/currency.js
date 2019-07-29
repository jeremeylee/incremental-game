import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { updateCurrency } from '../reducers/currencyReducer';
import { updateInterval } from '../reducers/intervalReducer';

const Currency = (props) => {

  const handleClick = () => {
    props.setCurrencyValue(props.currencyValue + 1);

  };

  return (
    <Row type="flex" justify="center">
      <Col>
        <Row type="flex" justify="center">{props.currencyValue}</Row>
        <Row type="flex" justify="center">
          <Button onClick={handleClick}>Increment</Button>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => (
  {
    currency: state.currency,
    interval: state.interval,
  }
);

const mapDispatchToProps = (
  {
    updateCurrency,
    updateInterval,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
