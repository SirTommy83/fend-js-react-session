import { useEffect, useRef, useState, useContext } from "react";
import NavLink from "../components/NavLink";
import logo from "../logo.svg";
import "../App.css";
import "../index.css";
import Button from "../components/Button";
import { ThemeContext } from "../main";
import Header from "../components/Header";
import Footer from "../components/Footer";

const products = [
  {
    id: 0,
    productName: "100 Push-Ups Challenge",
    duration: 40,
    description: "Meistere die Herausforderung von 100 Push-Ups.",
  },
  {
    id: 1,
    productName: "Stretch and Relax",
    duration: 40,
    description: "Stretchen und Relaxen sollte bei keinem Sport fehlen.",
  },
  {
    id: 2,
    productName: "50 Liegestütz Challenge",
    duration: 40,
    description: "Meistere die Herausforderung 50 Liegestütze zu schaffen.",
  },
];

function Home() {
  const [count, setCount] = useState(0);
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];
  const imgRef = useRef(null);

  useEffect(() => {
    console.log(imgRef?.current?.offsetLeft);
  }, []);

  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <div className="App">
        <header className="App-header main-content">
          <Header />
          <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
          <div className="flex items-center text-poppins text-fitness-color-light">
            <h1 className="font-poppins text-24px font-bold text-left">
              Dein Workout heute
            </h1>
            <button
              className="text-poppins text-12px font-normal text-right ml-4 invisible-button"
              onClick={() => alert("Trainingsplan")}
            >
              Trainingsplan
            </button>
          </div>
          <p>
            <Button color="grey" type="button" clickHandler={() => {}} />
          </p>
        </header>
        <Footer />
      </div>
    </>
  );
}

export default Home;

{
  /* <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
            <label htmlFor="email">Test</label>
          </p> */
}
