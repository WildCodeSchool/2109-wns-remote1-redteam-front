import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
mutation CreateProject($name: String, $description: String, $status: String, $startDate: String, $endDate: String) {
  createProject(name: $name, description: $description, status: $status, start_date: $startDate, end_date: $endDate) {
    name
    description
    status
    start_date
    end_date
    advance_pourcentage
    _id
  }
}
`
export const DELETE_PROJECT = gql`
mutation DeleteProject($deleteProjectId: String) {
    deleteProject(_id: $deleteProjectId) {
      name
      description
    }
  }
`;

export const UPDATE_PROJECT = gql`
mutation Mutation($name: String, $id: String, $description: String, $status: String, $startDate: String, $endDate: String, $advancePourcentage: Int) {
  updateProject(_id: $id, name: $name, description: $description, status: $status, start_date: $startDate, end_date: $endDate, advance_pourcentage: $advancePourcentage) {
    name
    description
  }
}
`;

