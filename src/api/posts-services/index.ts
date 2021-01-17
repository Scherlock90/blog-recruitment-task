import * as Queries from './queries';
import * as Mutations from '../posts-services/mutations';

export default {
  get() {
    return { ...Queries };
  },
  set() {
    return { ...Mutations };
  },
};
