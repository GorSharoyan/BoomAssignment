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

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleInputChange} />
        <>{value}</>
      </header>
    </div>
  );
}

export default App;
