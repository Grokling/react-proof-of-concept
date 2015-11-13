import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Templates from './templates/component.js';
import configureStore from './configure-store.js';
import documents from './pouch/feed.js';
import React from 'react';

const store = configureStore();
const documentStore = documents(store);

render(
  <Provider store={store}>
    <Templates />
  </Provider>,
  document.getElementById('root')
);
