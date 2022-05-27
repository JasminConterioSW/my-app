import './css/main.css';
import {Intro} from "./Components/Intro";
import {CultureFusion} from "./Components/CultureFusion";
import React from "react";
import {CirclePictures} from "./Components/CirclePictures";


function App() {
  return (

    <div className="App">
        <header>
            <h1>Jasmin's Wedding Dress </h1>
        </header>

        <Intro />
        <CultureFusion />
        <CirclePictures />
    </div>
  );
}

export default App;
