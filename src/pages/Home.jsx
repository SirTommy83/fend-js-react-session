import { useEffect, useRef, useContext } from "react";
import logo from "../logo.svg";
import "../App.css";
import "../index.css";
import Button from "../components/Button";
import { ThemeContext } from "../main";
import Header from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  const imgRef = useRef(null);

  useEffect(() => {
    console.log(imgRef?.current?.offsetLeft);
  }, []);

  const theme = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <MainLayout showFooter>
        <Header />
        <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
        <div className="flex items-center">
          <h1 className=" text-h2 font-bold text-left">Dein Workout heute</h1>
          <button
            className=" text-ps font-normal ml-10 invisible-button"
            onClick={() => alert("Trainingsplan")}
          >
            Trainingsplan
          </button>
        </div>
        <p>
          <Button type="button" clickHandler={() => {}} />
        </p>
      </MainLayout>
      {/* Hack to actually load gradients */}
      <div style={{ display: "none" }} className="bg-fitness-gradient-1" />
      <div style={{ display: "none" }} className="bg-fitness-gradient-2" />
      <div style={{ display: "none" }} className="bg-fitness-gradient-3" />
    </>
  );
}
