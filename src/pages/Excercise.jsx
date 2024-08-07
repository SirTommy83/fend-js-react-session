import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "../App.css";
import "../index.css";
import { MainLayout } from "../layouts/MainLayout";
import { GET_WORKOUT_WITH_EXERCISE } from "../queries/workouts";
import CountdownTimer from "../components/CountdownTimer";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import x from "../assets/x.svg";
import { getExerciseTypeLabel } from "../helper/getExerciseTypeLabel";
import NavLink from "../components/NavLink";

export function Excercise() {
  const [showQuitWarning, setShowQuitWarning] = useState(false);
  const params = useParams();
  let intervalRef = useRef();
  const exerciseId = params.exerciseId;
  const workoutId = params.workoutId;
  const programId = params.id;

  const { loading, error, data } = useQuery(GET_WORKOUT_WITH_EXERCISE, {
    variables: { id: workoutId, exerciseId: exerciseId },
  });
  let exercise = null;
  let prevExercise = null;
  let nextExercise = null;
  let exerciseComplete = false;

  if (data != null) {
    const { workout } = data;
    const exerciseIdx = workout.exercises.findIndex(
      (we) => we.exercise.id === exerciseId
    );
    console.log(workout.exercises, exerciseIdx);
    if (exerciseIdx > -1) {
      exercise = workout.exercises[exerciseIdx];
      exerciseComplete = exerciseIdx === workout.exercises.length - 1;
      if (exerciseIdx > 0) {
        console.log("prev:", workout.exercises[exerciseIdx - 1]);
        prevExercise = workout.exercises[exerciseIdx - 1].exercise;
      }
      if (exerciseIdx + 1 < workout.exercises.length) {
        console.log("next:", workout.exercises[exerciseIdx + 1]);
        nextExercise = workout.exercises[exerciseIdx + 1].exercise;
      }
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <MainLayout>
      <div className="flex flex-col justify-items-start p-4 gap-4 w-full">
        <div
          className="grid justify-items-end"
          onClick={() => {
            setShowQuitWarning(true);
          }}
        >
          <img src={x} />
        </div>
        {showQuitWarning && (
          <div className="font-bold text-h3 p-2 rounded-[25px] absolute flex flex-col justify-items-start items-center top-[30%] w-[350px] h-[250px] bg-fitness-color-medium ">
            Möchtest du das Workout wirklich beenden?
            <div className="w-full flex justify-between">
              <button
                className="text-p font-normal"
                onClick={() => {
                  setShowQuitWarning(false);
                }}
              >
                Nein, weiter machen!
              </button>
              <button className="font-normal text-p rounded-[3.25rem] bg-fitness-color-dark px-[1.5rem] py-[0.75rem]">
                <NavLink to={`/program/${programId}`}>
                  Ja, beenden
                </NavLink>
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-row items-center justify-between w-full pt-[8rem]">
          <div>
            {prevExercise != null && (
              <a
                className=""
                href={`/program/${programId}/workout/${workoutId}/exercise/${prevExercise.id}`}
              >
                <img src={arrowLeft} />
              </a>
            )}
          </div>
          <div>
            {exercise.exercise.type === "duration" && (
              <CountdownTimer initialTime={exercise.duration} />
            )}
            {exercise.exercise.type === "reps" && (
              <div className="font-bold text-[64px]">{exercise.reps}x</div>
            )}
          </div>
          <div>
            {nextExercise != null && (
              <a
                href={`/program/${programId}/workout/${workoutId}/exercise/${nextExercise.id}`}
              >
                <img src={arrowRight} />
              </a>
            )}
            {exerciseComplete && (
              <a href={`/program/${programId}/workout/${workoutId}/complete`}>
                <img src={arrowRight} />
              </a>
            )}
          </div>
        </div>
        <div className="font-bold text-h1">{exercise.exercise.name}</div>
        <div>{getExerciseTypeLabel(exercise.exercise.type)}</div>
      </div>
    </MainLayout>
  );
}
