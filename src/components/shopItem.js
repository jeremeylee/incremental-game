import React from 'react';
import { Button} from 'antd';

const ShopItem = (props) => {
  return (
    <div>
      <Button>{props.label}</Button>
    </div>
    
  )
}

export default ShopItem;
