import { gql } from '@apollo/client';


const DELETE_PROJECT = gql`
mutation DeleteProject($deleteProjectId: String) {
    deleteProject(_id: $deleteProjectId) {
      name
      description
    }
  }
`;

export default DELETE_PROJECT;