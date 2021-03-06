import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// import store from './stores/store';
import configureStore from './store/configureStore'
// import { connect } from 'react-redux';

import {getHomeContent} from './actions/content'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
store.dispatch(getHomeContent());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
