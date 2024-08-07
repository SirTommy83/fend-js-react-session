export function getExerciseTypeLabel(exerciseType) {
  switch (exerciseType) {
    case "duration":
      return "Trainingsdauer";
    case "reps":
      return "Wiederholungen";
    default:
      return "";
  }
}
