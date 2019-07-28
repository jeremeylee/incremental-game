import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { incrementGold } from '../reducers/goldReducer';
import { updateInterval } from '../reducers/intervalReducer';

const Currency = (props) => {
  const handleClick = () => {
    props.incrementGold();
    props.updateInterval(1000);
  };
  return (
    <Row type="flex" justify="center">
      <Col>
        <Row type="flex" justify="center">{props.currency}</Row>
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
    incrementGold,
    updateInterval,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
