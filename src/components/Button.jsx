import NavLink from "../components/NavLink";

const Button = ({ color, clickHandler }) => {
  const colors = {
    blue: "bg-blue-500",
    grey: "bg-blue-300",
  };

  return (
    <NavLink to="/programs">
      <button
        className="bg-fitness-color-medium font-bold text-h2 w-[21.5rem] h-[13.5rem] rounded-[1.9rem]"
        type="button"
        onClick={clickHandler}
      >
        Titel des Programms
      </button>
    </NavLink>
  );
};

export default Button;
