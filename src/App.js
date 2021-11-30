import "./App.css";
import { useState } from "react";

//services imports
import { printNumberPatternUp } from "./services/printPattern.services";
import { printNumberPatternDown } from "./services/printPattern.services";

function App() {
  let [value, setValue] = useState("");
  let [toggle, setToggle] = useState(0);

  //main function for drawing pattern
  const handleInputChange = (event) => {
    if (toggle === 1) {
      setValue(printNumberPatternUp(event.target.value));
    } else {
      setValue(printNumberPatternDown(event.target.value));
    }
  };

  //function for button toggles
  const handleReverse = () => {
    if (toggle === 1) {
      setToggle(0);
    } else {
      setToggle(1);
    }
  };

  return (
    <div className="App">
      <div className="App-body">
        <div>
          <input onChange={handleInputChange} />
          <button onClick={handleReverse}>reverse</button>
        </div>
        <div
          className="card"
          dangerouslySetInnerHTML={{
            __html: value
          }}
        />
      </div>
    </div>
  );
}

export default App;
