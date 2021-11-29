import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [value, setValue] = useState("");

  function createImage(number) {
    let result = "";
    for (let i = 0; i < number; i++) {
      for (let j = 0; j < number; j++) {
        result += "*";
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input />
        <>{}</>
      </header>
    </div>
  );
}

export default App;
