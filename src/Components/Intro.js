import React from "react";
import '../css/main.css';

export const Intro = () => {
    return (
        <div className="Content">
            <img className = "large-image"
                /* src = "https://lh3.googleusercontent.com/oL3V9GN-rwQ2zAByM4ykV30dy1YtWUoXFuYPjXxv0xdUoryZzpKOeOgsuYyK5FZdWSW_y2FOX3PuIhohONJOwTUYJon4AHSeAdCZnyUirPyOht3tqZcIcbPCXel0JeKRzQhONshFSg=w2400"
*/               src = {require("./Images/Full_dress_cropped.jpg")}
                 alt = "Full length photo of wedding dress"
            />

            <h2>Main features</h2>

            <ul>
                <li><a href="#culture-fusion-heading">Fusion of English and Indian wedding dress styles</a></li>
                <li><a href="#circle-picture-heading">Pictures representing things we liked to do together</a></li>
                <li>Maps of places we had been or would like to go together</li>
                <li>Diagrams representing both of our PhDs</li>
            </ul>
            <hr/>
        </div>

    )
}

