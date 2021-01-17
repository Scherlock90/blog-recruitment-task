import gql from 'graphql-tag';

export const UPDATE_OFFICE = gql`
  mutation createComment($title: titleInput!, $body: bodyInput!) {
    createComment(title: $titleInput, body: $bodyInput) {
      id
      name
      email
      body
      post {
        id
        title
        body
      }
    }
  }
`;
