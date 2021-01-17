import { lazy } from 'react';
import { ROUTE_URLS } from '../routes';

import { IPageContent } from './pageContent.interface';

const MainPage = lazy(() => import('./main-page'));
const UserPage = lazy(() => import('./user-page'));
const PostPage = lazy(() => import('./post-page'));

export const PageContent: readonly IPageContent[] = Object.freeze([
  { path: ROUTE_URLS.MAIN_ROUTES.main, component: MainPage, exact: true },
  { path: ROUTE_URLS.MAIN_ROUTES.user, component: UserPage, exact: false },
  { path: ROUTE_URLS.MAIN_ROUTES.post, component: PostPage, exact: false },
]);
