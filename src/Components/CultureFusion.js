import React from "react";
import '../css/main.css';

export const CultureFusion = () => {
    return (
        <div className="Content" >
            <a id="culture-fusion-heading"><h3>A fusion of cultures</h3></a>

            <p>
                The style of the wedding dress was western.
                It was a floor-length dress with a wide waistband, capped sleeves and a sweetheart neckline.
                Instead of the veil being at the back of my head, it attached to the top of my hair
                - similar to the position an Indian chunni would be.
            </p>

            <p>
                The colouring of the dress was a traditional Indian red.
                It also featured lots of decoration and embroidery which was heavier than you see on a lot of western wedding dresses,
                but lighter than you see on most Indian ones!
            </p>

            <p>
                I wore a gold jewellery set bought by my Mum's family;
                a gold tikka on my forehead which both my Mum and my maternal grandmother wore on their wedding days;
                traditional "chura" bangles;
                and kaleere (decorations made from coconuts, fabric and shells) made for me by my paternal grandmother.
            </p>

            <div className="row">
                <div className="column">
                    <img
                        src = {require("./Images/Chura.jpg")}
                        alt="Chura"
                    />
                </div>
                <div className="column">
                    <img
                        src = {require("./Images/Kaleere.JPG")}
                        alt="Kaleere"
                    />
                </div>
                <div className="column">
                    <img
                        src = {require("./Images/Tikka.jpg")}
                        alt="Tikka"
                    />
                </div>
            </div>

            <hr/>
        </div>
    )
}