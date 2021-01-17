import users from './users-services';
import posts from './posts-services';
import comments from './comments-services';

import { IServiceFactory, IServices } from './ServiceFactiory.interface';

const services: Readonly<IServices> = Object.freeze({
  users,
  posts,
  comments,
});

export const ServiceFactory: Readonly<IServiceFactory> = Object.freeze({
  get: (name: string) => services[name],
  set: (name: string) => services[name],
});
