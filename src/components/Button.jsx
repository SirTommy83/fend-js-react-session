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
      count is: {count}
    </button>
  );
};

export default Button;
