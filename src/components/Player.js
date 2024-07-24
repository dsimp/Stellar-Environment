import React from "react";
import "./styles/Player.css";

const Player = () => {
  const handleKeyDown = (event) => {
    if (event.key === "t") {
      plantTree();
    }
  };

  const plantTree = () => {
    console.log("Tree planted!");
    // Add logic to plant tree in the game world
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default Player;
