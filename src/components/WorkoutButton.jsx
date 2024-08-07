export default function WorkoutButton({
  workoutWithDay,
  colorIndex,
  programId,
}) {
  const { category, duration, id, name } = workoutWithDay.workout;
  console.log(workoutWithDay);
  return (
    <div className="flex w-[23.5rem] h-[6.25rem] rounded-[1.25rem] mx-4 my-2 overflow-hidden">
      <div
        className={`w-[6.25rem] h-full bg-fitness-gradient-${
          (colorIndex % 3) + 1
        }`}
      ></div>
      <div className="w-[17.25rem] h-full bg-[#3A4151]">
        <div>
          <b>{`Tag: ${workoutWithDay.day} - ${name}`}</b>
          <br />
          {duration} Min.
          <br />
          {category}
        </div>
      </div>
    </div>
  );
}
