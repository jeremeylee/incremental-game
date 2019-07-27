import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Currency from './components/currency';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Row>
          <Navigation />
      </Row>
      <Row>
        <Currency />

      </Row>
      
    </div>
  );
}

export default App;
