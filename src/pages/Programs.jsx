import { useQuery } from "@apollo/client";
import "../App.css";
import "../index.css";
import { GET_PROGRAMS } from "../queries/programs";
import { MainLayout } from "../layouts/MainLayout";

function Programs() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  const { programs } = data;

  return (
    <MainLayout showFooter>
      <div className="font-bold text-h2">Browse</div>
      <div className="font-bold text-h2">Workouts</div>
      <div className="flex flex-col justify-items-start gap-4 w-full">
        {programs.map((program, index) => (
          <div
            className={`button  bg-fitness-gradient-${(index % 3) + 1}`}
            key={program.id}
          >
            <a href={`/program/${program.id}`} key={program.id}>
              <button className="w-full h-full p-4">{[program.name]}</button>
            </a>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Programs;
