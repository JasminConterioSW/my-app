import React from "react";
import '../css/main.css';

export const CirclePictures = () => {
    return (
        <div className="Content" >
            <a id="circle-picture-heading"><h3>Pictures inside circles</h3></a>

            <img className = "medium-image"
                 src = {require("./Images/Circle_bird.JPG")}
                 alt="Embroidered bird"
            />


{/*            <hr/>*/}
        </div>
    )
}