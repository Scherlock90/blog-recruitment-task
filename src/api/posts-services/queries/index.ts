import gql from 'graphql-tag';

export const GET_ALL_USERS = gql`
  query posts {
    data {
      id
      title
      body
    }
  }
`;
