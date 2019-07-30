import React from 'react';
import { Row, Tabs } from 'antd';
import ShopItem from './shopItem';

const Shop = (props) => {
  const { TabPane } = Tabs;

  return (
    <div>
      <Row type="flex" justify="start">
        <Tabs
          tabPosition="left"
      >
          <TabPane tab={`Clicker ${props.purchased[0]}`} key="1" >
            <ShopItem 
              cost={10}
              currencyValue={props.currencyValue}
              setCurrencyValue={props.setCurrencyValue}
              purchased={props.purchased}
              setPurchased={props.setPurchased}
              rate={1}
              index={0}
            />
          </TabPane>
          <TabPane tab={`Fast Clicker ${props.purchased[1]}`} key="2" >
            <ShopItem 
                cost={200}
                currencyValue={props.currencyValue}
                setCurrencyValue={props.setCurrencyValue}
                purchased={props.purchased}
                setPurchased={props.setPurchased}
                rate={15}
                index={1}
              />
          </TabPane>
          <TabPane tab={`Faster Clicker ${props.purchased[2]}`} key="3" >
            <ShopItem 
                cost={1500}
                currencyValue={props.currencyValue}
                setCurrencyValue={props.setCurrencyValue}
                purchased={props.purchased}
                setPurchased={props.setPurchased}
                rate={50}
                index={2}
              />
          </TabPane>
          <TabPane tab={`Fastest Clicker ${props.purchased[3]}`} key="4" >
            <ShopItem 
                cost={10000}
                currencyValue={props.currencyValue}
                setCurrencyValue={props.setCurrencyValue}
                purchased={props.purchased}
                setPurchased={props.setPurchased}
                rate={100}
                index={3}
              />
          </TabPane>
        </Tabs>

      </Row>
    </div>
  );
};

export default Shop;
