import { LazyExoticComponent } from 'react';

export interface IPageContent {
  path: '/' | '/user' | '/user/:id';
  component: LazyExoticComponent<() => JSX.Element>;
  exact: boolean;
}
