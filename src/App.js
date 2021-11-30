import "./App.css";
import { useState } from "react";

//componets
import PatternDrawer from "./components/PatternDrawer";

function App() {
  let [value, setValue] = useState("");
  let [toggle, setToggle] = useState(0);

  //main function for drawing pattern
  const handleInputChange = (event) => {
    if (toggle === 1) {
      setValue(event.target.value);
    } else {
      setValue(event.target.value);
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
        <div className="">
          <input onChange={handleInputChange} />
          <button onClick={handleReverse}>Reverse</button>
        </div>
        <PatternDrawer value={value} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
