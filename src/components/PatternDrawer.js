import React from "react";

//UI
import "./PatternDrawer.css";

//services
import {
  printNumberPatternDown,
  printNumberPatternUp
} from "../services/printPattern.services";

export default function PatternDrawer({ value, toggle }) {
  let valArray = [];

  if (toggle === 1) {
    valArray = printNumberPatternUp(value);
  } else {
    valArray = printNumberPatternDown(value);
  }

  return (
    <div className="card">
      {valArray.map((el) => {
        return <pre>{el}</pre>;
      })}
    </div>
  );
}
