import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            _id
            name
            description
            status
        }
    }
`;

export default GET_PROJECTS;