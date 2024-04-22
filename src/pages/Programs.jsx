import { useQuery, gql } from "@apollo/client";

import NavLink from "../components/NavLink";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
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

function Programs() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { programs } = data;

  return (
    <>
      <div>Test</div>
      <div className="App">
        <div>Programs</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        {programs.map((program) => (
          <div key={program.id}>
            <a href={`/program/${program.id}`}>{program.name}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Programs;
