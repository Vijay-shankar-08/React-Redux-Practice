import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux-saga/store'
// import thunk from 'redux-thunk';

// import rootReducer from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);