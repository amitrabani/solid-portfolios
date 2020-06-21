import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './AppContainer';
import './index.css';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
