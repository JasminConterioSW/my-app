import './css/main.css';
import {Intro} from "./Components/Intro";
import {CultureFusion} from "./Components/CultureFusion";
import React from "react";


function App() {
  return (

    <div className="App">
        <header>
            <h1>Jasmin's Wedding Dress </h1>
        </header>

        <Intro />
        <CultureFusion />
    </div>
  );
}

export default App;
