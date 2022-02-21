import { gql } from '@apollo/client';


export const DELETE_PROJECT = gql`
mutation DeleteProject($deleteProjectId: String) {
    deleteProject(_id: $deleteProjectId) {
      name
      description
    }
  }
`;

export const UPDATE_PROJECT = gql`
mutation UpdateProject($name: String, $description: String, $status: String, $startDate: String, $endDate: String, $advancePourcentage: Int, $updateProjectId: String) {
  updateProject(name: $name, description: $description, status: $status, start_date: $startDate, end_date: $endDate, advance_pourcentage: $advancePourcentage, id: $updateProjectId) {
    name
    description
    status
    start_date
    end_date
    advance_pourcentage
  }
}
`;

