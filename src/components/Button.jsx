const Button = ({ color, clickHandler, count }) => {
  const colors = {
    blue: "bg-blue-500",
  };
  return (
    <button
      className={`${color ? colors[color] : "bg-red-500"}`}
      type="button"
      onClick={clickHandler}
    >
      Titel des Programms
    </button>
  );
};

export default Button;
