import { gql } from "@apollo/client";

export const GET_WORKOUT = gql`
  query GetWorkout($id: ID!) {
    workout(where: { id: $id }) {
      id
      name
      category
      duration
      exercises {
        ... on ExerciseWithDuration {
          exercise {
            id
            name
          }
          duration
        }
        ... on ExerciseWithReps {
          exercise {
            id
            name
          }
          reps
        }
      }
    }
  }
`;

export const GET_WORKOUT_WITH_EXERCISE = gql`
  query GetWorkout($id: ID!) {
    workout(where: { id: $id }) {
      id
      name
      category
      duration
      exercises {
        ... on ExerciseWithDuration {
          exercise {
            id
            name
            description
            type
          }
          duration
        }
        ... on ExerciseWithReps {
          exercise {
            id
            name
            description
            type
          }
          reps
        }
      }
    }
  }
`;
