import React from 'react';

import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import './index.css';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();
