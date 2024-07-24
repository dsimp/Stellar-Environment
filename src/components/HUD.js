import React, { useState } from "react";
import "./styles/HUD.css";

const HUD = () => {
  const [score, setScore] = useState(0);

  const increaseScore = (amount) => {
    setScore(score + amount);
  };

  return (
    <div className="HUD">
      <h1>Score: {score}</h1>
      <button onClick={() => increaseScore(1)}>Increase Score</button>
    </div>
  );
};

export default HUD;
