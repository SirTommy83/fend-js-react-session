import { NavLink as Link } from "react-router-dom";

function NavLink({ children, to, ...rest }) {
  return (
    <Link
      to={to}
      className={({ isActive }) => (isActive ? "font-black" : "font-normal")}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default NavLink;
