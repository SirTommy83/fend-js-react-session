import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import NavLink from "../components/NavLink";

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

function Program() {
  const location = useLocation();
  const params = useParams();

  const programId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { program } = data;

  return (
    <>
      <div>Test</div>
      <div className="App">
        <div>{program.name}</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
      </div>
    </>
  );
}

export default Program;
