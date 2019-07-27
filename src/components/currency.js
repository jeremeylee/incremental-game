import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { incrementGold } from '../reducers/goldReducer';

const Currency = (props) => {
  const handleClick = () => {
    props.incrementGold();
  };
  return (
    <div>
      {props.currency}
      <Button onClick={handleClick}>Increment</Button>
    </div>
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
