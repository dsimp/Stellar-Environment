import React, { useEffect } from "react";
import Player from "./Player";
import "./styles/Game.css";

const Game = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/unreal-build/build.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Game">
      <canvas id="canvas"></canvas>
      <Player />
    </div>
  );
};

export default Game;
