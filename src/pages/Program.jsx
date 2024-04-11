import { useLocation, useParams } from "react-router-dom";
import NavLink from "../components/NavLink";

function Program() {
  const location = useLocation();
  const params = useParams();
  console.log(location, params);
  return (
    <>
      <div>Test</div>
      <div className="App">
        <div>Program</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">Programs</NavLink>
      </div>
    </>
  );
}

export default Program;
