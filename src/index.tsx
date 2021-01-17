import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/client';

import { App } from '@components/index';

import reportWebVitals from './reportWebVitals';

import { client } from './api/HTTP';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <ApolloProvider {...{ client }}>
    <Router {...{ history }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ApolloProvider>,
  rootElement
);

reportWebVitals();
