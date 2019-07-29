import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { incrementCurrency } from '../reducers/currencyReducer';
import { updateInterval } from '../reducers/intervalReducer';

const Currency = (props) => {
  const [timeoutID, setTimeoutID] = useState();
  const [start, setStart] = useState(false);


/*   const currencyInterval = () => {
    const timeout = setTimeout(() => {
      console.log(`interval: ${100000 / props.interval}`);
      props.incrementCurrency();
      currencyInterval();
    }, 100000 / props.interval);
    setTimeoutID(timeout);
    console.log(timeoutID)
  }; */

  const handleClick = () => {
    props.setCurrencyValue(props.currencyValue + 1);
/*     if (start === false) {
      currencyInterval();
      setStart(true);
    } else {
      clearTimeout(timeoutID);
      currencyInterval();
    } */
  };

  const handleUpdate = () => {
    props.incrementCurrency(props.currencyValue);
    console.log(props.currency);
  }

  return (
    <Row type="flex" justify="center">
      <Col>
        <Row type="flex" justify="center">{props.currencyValue}</Row>
        <Row type="flex" justify="center">
          <Button onClick={handleClick}>Increment</Button>
          <Button onClick={handleUpdate}>Update</Button>
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
    incrementCurrency,
    updateInterval,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
