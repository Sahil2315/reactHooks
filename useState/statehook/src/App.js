import './App.css';
import { useState } from 'react';

function App() {

  let [value, changer] = useState(5)           // Setting Initial Value for the "value" State

  let [bgcolor, colorer] = useState("bggreen")     // Setting Initial Value of "color" State

  let inc = () => {                            //Creating Function to Increase Value of the "value" State
    changer(prevValue => prevValue + 1)
    colorer( bgcolor = "bgblue")
  }

  let dec = () => {                            //Creating Function to Decrease Value of the "value" State
    changer(prevValue => prevValue - 1)
    colorer( bgcolor = "bgred")
  }

  return (
    <div>
      <button onClick={dec}> - </button>
      <span className={bgcolor}>{value}</span>
      <button onClick={inc}> + </button>
    </div>
  );
}

export default App;
