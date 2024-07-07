import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "../App.css";
import Footer from "../components/Footer";

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
    <div className="App">
      <div className="font-poppins font-bold text-fitness-color-light text-24px text-left">
        Browse Program
      </div>
      <div>
        <div className="text-fitness-color-light text-24px">{program.name}</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
      </div>
      <Footer />
    </div>
  );
}

export default Program;
