import gql from 'graphql-tag';

export const GET_ALL_USERS = gql`
  query users {
    data {
      id
      name
      username
      email
      address
      phone
      website
      company
    }
  }
`;
