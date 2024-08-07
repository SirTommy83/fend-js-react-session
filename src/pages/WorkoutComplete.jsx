import { MainLayout } from "../layouts/MainLayout";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_WORKOUT } from "../queries/workouts";
import x from "../assets/x.svg";
import NavLink from "../components/NavLink";

export function WorkoutComplete() {
  const params = useParams();
  const programId = params.id;
  const workoutId = params.workoutId;

  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: workoutId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <MainLayout>
      <div className="relative h-screen w-screen">
        <NavLink to="/" className="absolute top-4 right-4">
          <img src={x} alt="close" />
        </NavLink>
        <div className="inset-0 flex items-center justify-center pt-[8rem]">
          <div className="text-center">
            <div className="text-h1 font-bold">Glückwunsch!</div>
            <div className="font-bold text-h3">
              Du hast x Tage
              <br />
              am Stück trainiert!
            </div>
            <div className="text-p font-normal mt-16 mb-4">
              Wie war das Workout?
            </div>
            <div>
              <NavLink to="/">
                <button className="bg-fitness-color-medium w-32 h-20 m-1 text-p font-normal">
                  zu leicht
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="bg-fitness-color-medium w-32 h-20 m-1 text-p font-normal">
                  genau richtig
                </button>
              </NavLink>
              <NavLink to="/">
                <button className="bg-fitness-color-medium w-32 h-20 m-1 text-p font-normal">
                  zu schwer
                </button>
              </NavLink>
              <NavLink to="/">
                <div className="text-p font-normal text-fitness-color-medium m-4">
                  Bewertung überspringen
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
