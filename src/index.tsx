import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/Container/appCon';
import * as serviceWorker from './serviceWorker';
import './Design/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { mainReducer } from './Utils/MainReducer/mainReducer';
import { Provider } from 'react-redux';
import appWatcher from './App/Saga/saga';

const sagaMiddleWare = createSagaMiddleware();
export const store = createStore(mainReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(appWatcher);

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
