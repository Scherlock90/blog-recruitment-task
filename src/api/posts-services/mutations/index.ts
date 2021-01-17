import gql from 'graphql-tag';

export const UPDATE_OFFICE = gql`
  mutation createPost($title: titleInput!, $body: bodyInput!) {
    createPost(title: $titleInput, body: $bodyInput) {
      id
      title
      body
      user
    }
  }
`;
