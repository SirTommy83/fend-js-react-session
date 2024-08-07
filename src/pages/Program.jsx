import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../App.css";
import { GET_PROGRAM } from "../queries/programs";
import NavLink from "../components/NavLink";
import ShowAllButton from "../components/ShowAllButton";
import { MainLayout } from "../layouts/MainLayout";
import WorkoutButton from "../components/WorkoutButton";
import { PieChart } from "../components/PieChart";
import x from "../assets/x.svg";

export default function Program() {
  const params = useParams();

  const programId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { program } = data;

  const categorieCounts = Object.values(
    data.program.workoutsWithDay.reduce((acc, item) => {
      const category = item.workout.category;
      acc[category] = {
        label: category,
        value: acc[category] != null ? acc[category].value + 1 : 1,
      };
      return acc;
    }, {})
  );
  console.log(categorieCounts);

  return (
    <MainLayout>
      <div className="flex flex-col items-stretch justify-items-center">
        <>
          <div className="relative w-full">
            <div className="font-bold text-h1 bg-fitness-gradient-2 pt-48 pb-48 w-full">
              {program.name}
              <div className="text-p font-normal">{`${program.duration} Wochen - ${program.focus} - ${program.difficulty}`}</div>
            </div>
            <NavLink to="/programs" className="absolute top-0 right-0 m-4">
              <img src={x} alt="close" />
            </NavLink>
          </div>
          <div>{program.description}</div>

          {program.workoutsWithDay.length > 0 && (
            <a
              href={`/program/${programId}/workout/${program.workoutsWithDay[0].id}`}
            >
              <button className="font-poppins font-normal text-center text-fitness-color-dark text-p bg-fitness-gradient-2 mt-4 px-[1.5rem] py-[0.75rem] rounded-[50px]">
                Jetzt starten
              </button>
            </a>
          )}
          <h3 className="font-bold text-h3 text-left m-4">
            So ist das Programm aufgeteilt:
          </h3>
          <div>
            <PieChart data={categorieCounts} />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-h3 text-left mx-4">21 Tage</h3>
            <ShowAllButton className="text-right" />
          </div>
          {program.workoutsWithDay.map((wwd, idx) => (
            <WorkoutButton
              key={wwd.id}
              workoutWithDay={wwd}
              colorIndex={idx}
              prograiId={programId}
            />
          ))}
        </>
      </div>
    </MainLayout>
  );
}
