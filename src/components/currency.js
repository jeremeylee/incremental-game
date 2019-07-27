import React from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { incrementGold } from '../reducers/goldReducer';

const Currency = (props) => {
  const handleClick = () => {
    props.incrementGold();
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
  }
);

const mapDispatchToProps = (
  {
    incrementGold,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
