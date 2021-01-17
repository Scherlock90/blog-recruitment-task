import { DocumentNode } from 'graphql';

export interface IServiceFactory {
  get: (name: string) => any;
  set: (name: string) => any;
}

export interface IServices {
  users: {
    get(): {
      GET_ALL_USERS: DocumentNode;
    };
  };
  posts: {
    get(): {
      GET_ALL_USERS: DocumentNode;
    };
    set(): {
      UPDATE_OFFICE: DocumentNode;
    };
  };
  comments: {
    get(): {
      GET_ALL_USERS: DocumentNode;
    };
    set(): {
      UPDATE_OFFICE: DocumentNode;
    };
  };
}
