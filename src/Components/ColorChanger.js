import React, { useState } from "react";
import "./ColorChanger.css";

export default function ColorChanger() {
  let [color, setColor] = useState("black");

  // const colors = [
  //   "#16a085",
  //   "#27ae60",
  //   "#2c3e50",
  //   "#f39c12",
  //   "#e74c3c",
  //   "#9b59b6",
  //   "#FB6964",
  //   "#342224",
  //   "#472E32",
  //   "#BDBB99",
  //   "#77B1A9",
  //   "#73A857",
  // ];

  // const getRandomColor = () => {
  //   const randomColorIndex = Math.floor(Math.random() * colors.length);
  //   console.log("change color");
  //   return colors[randomColorIndex];
  // };

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let finalColor = "#";
    for (var i = 0; i < 6; i++) {
      finalColor += letters[Math.floor(Math.random() * 16)];
    }
    return finalColor;
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="card-box">
          <button
            onClick={() => setColor((color = getRandomColor()))}
            style={{ backgroundColor: color }}
          >
            Change Color of the App
          </button>
        </div>
      </div>
    </>
  );
}
