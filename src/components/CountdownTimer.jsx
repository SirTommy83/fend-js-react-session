import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isRunning, timeLeft]);

  const percentage = ((initialTime - timeLeft) / initialTime) * 100;

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };
  console.log(initialTime, timeLeft);
  return (
    <div className="w-full">
      <div className={!isRunning && timeLeft < initialTime ? "opacity-25" : ""}>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient
              id="progressGradient"
              gradientTransform="rotate(315)"
            >
              <stop offset="0%" stopColor="#FF99C4" />
              <stop offset="100%" stopColor="#FFD162" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgressbar
          value={percentage}
          text={`${timeLeft}s`}
          styles={buildStyles({
            pathColor: `url(#progressGradient)`,
            textColor: "#FBFBFB",
            trailColor: "#d6d6d6",
            pathTransitionDuration: 0.5,
            strokeLinecap: "round",
          })}
        />
        <button
          onClick={handleStartPause}
          className="font-poppins font-normal text-p text-fitness-color-dark bg-fitness-gradient-2 mt-4 px-[25px] py-[12px] rounded-[50px]"
        >
          {isRunning ? "Pause" : "Start"}{" "}
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default CountdownTimer;
