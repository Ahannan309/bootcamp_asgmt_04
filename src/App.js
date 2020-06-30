import React, { useState } from "react";
import CountMessage from "./CountMessage.js";

import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  let [button, setButton] = useState(false);

  return (
    <div className={`counter ${isMorning ? "dayLight" : "darkMode"}`}>
      <div className="mode">
        <p>MODE: {isMorning ? "Light" : "Dark"}</p>
      </div>

      <CountMessage counter={count}></CountMessage>
      <div className="button">
        <button
          onClick={() => setCount(++count)}
          className={`${button ? "" : "dark_button"}`}
        >
          Count
        </button>
        <button
          onClick={() => setCount(--count)}
          className={`${button ? "" : "dark_button"}`}
        >
          Subtract
        </button>
        <button
          onClick={() => setCount(0)}
          className={`${button ? "" : "dark_button"}`}
        >
          Reset
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setMorning(!isMorning);
            setButton(!button);
          }}
        >
          Change To {isMorning ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
