import { MAIN_ROUTE, POST_ROUTE, USER_ROUTE } from './constants';

const MAIN_ROUTES = Object.freeze({
  main: MAIN_ROUTE as '/',
  user: USER_ROUTE as '/user',
  post: POST_ROUTE as '/user/:id',
});

export const ROUTE_URLS = Object.freeze({
  MAIN_ROUTES,
});
