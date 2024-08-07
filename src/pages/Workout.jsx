import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../App.css";
import NavLink from "../components/NavLink";
import { GET_PROGRAM } from "../queries/programs";
import { MainLayout } from "../layouts/MainLayout";
import pfeil from "../assets/pfeil.svg";
import { GET_WORKOUT_WITH_DAY } from "../queries/workoutWithDay";

export function Workout() {
  const params = useParams();
  const programId = params.id;
  const workoutWithDayId = params.workoutWithDayId;

  const { loading, error, data } = useQuery(GET_WORKOUT_WITH_DAY, {
    variables: { id: workoutWithDayId, programId },
  });
  const {
    loading: programLoading,
    error: programError,
    data: programData,
  } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading || programLoading) return <p>Loading...</p>;
  if (error || programError) return <p>Error : {error.message}</p>;

  console.log(data);

  const { workout, day } = data.program.workoutsWithDay[0];
  const { program } = programData;

  return (
    <MainLayout>
      <div className="font-normal text-ps w-full mt-6 flex items-center justify-between">
        <div className="flex-1 text-center">{program.name}</div>
        <NavLink to="/programs">
          <img src={pfeil} className="absolute top-0 right-0 m-6" />
        </NavLink>
      </div>

      <div className="font-bold w-full text-h1 py-48">
        {`Tag: ${day}`}
        <br /> {workout.name}
        <div className="text-ps font-normal">{`${workout.duration} Min. · ${workout.category}`}</div>
      </div>
      {workout.exercises.length > 0 && (
        <a
          key={workout.exercises[0].exercise.id}
          href={`/program/${programId}/workout/${workout.id}/exercise/${workout.exercises[0].exercise.id}`}
        >
          <button
            className={`bg-fitness-gradient-2 text-fitness-color-dark text-p px-[25px] py-[12px] rounded-[50px]`}
          >
            los!
          </button>
        </a>
      )}
    </MainLayout>
  );
}
