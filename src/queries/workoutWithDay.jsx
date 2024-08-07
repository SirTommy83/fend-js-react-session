import { gql } from "@apollo/client";

export const GET_WORKOUT_WITH_DAY = gql`
  query GetWorkoutWithDay($programId: ID!, $id: ID!) {
    program(where: { id: $programId }) {
      workoutsWithDay(where: { id: $id }) {
        day
        workout {
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
    }
  }
`;
