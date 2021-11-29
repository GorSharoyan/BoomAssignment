import "./App.css";
import { useState } from "react";

//services imports
import { printNumberPatternUp } from "./services/printPattern.services";
import { printPatternDown } from "./services/printPattern.services";

function App() {
  let [value, setValue] = useState("");

  const handleInputChange = (event) => {
    let number = event.target.value;
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
