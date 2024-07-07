import NavLink from "../components/NavLink";

const Button = ({ color, clickHandler }) => {
  const colors = {
    blue: "bg-blue-500",
    grey: "bg-blue-300",
  };

  return (
    <NavLink to="/programs">
      <button
        className={`${
          color ? colors[color] : "bg-fitness-color-gradient3"
        } w-[23.5rem] h-[13.5rem] rounded-[1.9rem]`}
        type="button"
        onClick={clickHandler}
      >
        Wähle dein Workout
      </button>
    </NavLink>
  );
};

export default Button;
