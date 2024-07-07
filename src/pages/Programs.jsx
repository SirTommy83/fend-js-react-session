import { useQuery, gql } from "@apollo/client";
import "../App.css";
import "../index.css";
import Footer from "../components/Footer";
import NavLink from "../components/NavLink";
import Button from "../components/Button";

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
      <div className="font-poppins font-bold text-24px">Browse</div>
      <div className="App main-content">
        <div className="font-poppins font-bold text-24px">Workouts</div>
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program) => (
            <a
              href={`/program/${program.id}`}
              key={program.id}
              className="button bg-fitness-color-gradient2"
            >
              <button className="w-full h-full p-4">{program.name}</button>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Programs;
