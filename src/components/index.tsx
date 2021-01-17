import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LOADING } from './constants';

import { PageContent } from './utils';

import { GlobalStyle } from './styles';

const NotFound = lazy(() => import('./not-found'));

export const App = () => (
  <div className={'app-main'}>
    <GlobalStyle />
    <Suspense fallback={<div>{LOADING}</div>}>
      <Switch>
        {PageContent.map(({ component, path, exact }) => (
          <Route key={path} {...{ component, path, exact }} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </div>
);
