import './css/main.css';
import {Intro} from "./Components/Intro";
import {CultureFusion} from "./Components/CultureFusion";
import React from "react";
import {CirclePictures} from "./Components/CirclePictures";
import {TestButton} from "./Components/TestButton";
import {KonamiCode} from "./KonamiCode";



function App() {
    KonamiCode()


  return (

    <div id = "appContainer" className="App">
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
