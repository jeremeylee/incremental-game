import React from 'react';
import { Row, Button } from 'antd';
import { connect } from 'react-redux';
import { incrementGold } from '../reducers/goldReducer';

const Currency = (props) => {
  const handleClick = () => {
    props.incrementGold();
  };
  return (
    <Row>  
      <Row>{props.currency}</Row>
      <Row>
        <Button onClick={handleClick}>Increment</Button>
      </Row>
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
