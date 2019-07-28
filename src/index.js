import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import goldReducer from './reducers/goldReducer';
import navigationReducer from './reducers/navigationReducer';
import intervalReducer from './reducers/intervalReducer';

const reducer = combineReducers({
  currency: goldReducer,
  navigation: navigationReducer,
  interval: intervalReducer,
});

const store = createStore(reducer);

const render = () => {
  console.log(store.getState());
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
