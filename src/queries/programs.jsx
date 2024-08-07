import { gql } from "@apollo/client";

export const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      difficulty
      duration
      focus
      workoutsWithDay {
        id
        day
        workout {
          id
          name
          duration
          category
        }
      }
    }
  }
`;

export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      description
      difficulty
      duration
      workoutsWithDay {
        id
        day
        workout {
          id
          name
          duration
          category
        }
      }
    }
  }
`;
