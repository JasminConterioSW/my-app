import React from "react";
import '../css/main.css';
import {toggleBackgroundColor} from "../KonamiCode";

export const TestButton = () => {

    const handleClick = () => {
        toggleBackgroundColor()
    }

    return (
    <div className="Content" >
        <a id="test-button-heading"><h3>Test button</h3></a>

        <button
            id="testButton"
            onClick = {handleClick}
        >Test button</button>


        <hr/>
    </div>
    )
}

