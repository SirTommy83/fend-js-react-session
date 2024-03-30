import { useEffect, useRef, useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { ThemeContext } from "./main";

const products = [
  {
    id: 0,
    productName: "Äthiopien",
    price: 690,
    description:
      "MAYA Hochlandkaffee von MAYA Kaffee 1991 wird an den Hängen der Sierra Madre de Chiapas angebaut, ein Gebirgszug, der sich entlang der Pazifikküste im Süden Mexikos erstreckt. Hier haben sich indianische Kleinbauern mit Anbauflächen von ein bis drei Hektar Land in Kooperativen zusammengeschlossen und verzichten komplett auf Industriedünger und Pestizide. Schonend geröstet, entwickelt diese einzigartige Spezialität ein überraschend vielschichtiges Aromenspiel mit deutlichen Noten von Haselnuss. Als klassischer Aufguss ist unser MAYA Filterkaffee besonders ergiebig. 100% BIO aus kontrolliert ökologischem Anbau. DE-ÖKO-003 / Nicht-EU-Landwirtschaft.",
  },
  {
    id: 1,
    productName: "Brasilien",
    price: 880,
    description:
      "MAYA Hochlandkaffee von MAYA Kaffee 1991 wird an den Hängen der Sierra Madre de Chiapas angebaut, ein Gebirgszug, der sich entlang der Pazifikküste im Süden Mexikos erstreckt. Hier haben sich indianische Kleinbauern mit Anbauflächen von ein bis drei Hektar Land in Kooperativen zusammengeschlossen und verzichten komplett auf Industriedünger und Pestizide. Schonend geröstet, entwickelt diese einzigartige Spezialität ein überraschend vielschichtiges Aromenspiel mit deutlichen Noten von Haselnuss. Als klassischer Aufguss ist unser MAYA Filterkaffee besonders ergiebig. 100% BIO aus kontrolliert ökologischem Anbau. DE-ÖKO-003 / Nicht-EU-Landwirtschaft.",
  },
  {
    id: 2,
    productName: "Brasilien",
    price: 880,
    description:
      "MAYA Hochlandkaffee von MAYA Kaffee 1991 wird an den Hängen der Sierra Madre de Chiapas angebaut, ein Gebirgszug, der sich entlang der Pazifikküste im Süden Mexikos erstreckt. Hier haben sich indianische Kleinbauern mit Anbauflächen von ein bis drei Hektar Land in Kooperativen zusammengeschlossen und verzichten komplett auf Industriedünger und Pestizide. Schonend geröstet, entwickelt diese einzigartige Spezialität ein überraschend vielschichtiges Aromenspiel mit deutlichen Noten von Haselnuss. Als klassischer Aufguss ist unser MAYA Filterkaffee besonders ergiebig. 100% BIO aus kontrolliert ökologischem Anbau. DE-ÖKO-003 / Nicht-EU-Landwirtschaft.",
  },
];

function App() {
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

  // if (count > 5) {
  //   return <div>Count is too high</div>;
  // }

  return (
    <>
      <div>Test</div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <p>
            <Button
              color="blue"
              count={count}
              clickHandler={() => setCount((currentCount) => currentCount + 1)}
            />
          </p>
          {count > 5 && <div>COUNT IS 5 NOW</div>}
          <p className="text-fitness-color-dark">
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          {products.map((product, i) => (
            <div key={`product-${i}`}>{product.productName}</div>
          ))}
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
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
