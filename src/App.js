import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Currency from './components/currency';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Currency />
    </div>
  );
}

export default App;
