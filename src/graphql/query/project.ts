import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            _id
            name
            description
            status
        }
    }
`;

export const GET_PROJECT = gql`
    query GetOneProject($id: ID) {
        project(_id: $id) {
            _id
            name
            description
            status
            start_date
            end_date
            advance_pourcentage
        }
    }
`;