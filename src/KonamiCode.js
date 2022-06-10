import React from "react";


export const KonamiCode = () => {
    const targetCode = "sdfdfds".split("")
    let codeCharactersEntered = 0
    document.addEventListener("keypress", function(event) {
        if (event.key === targetCode[codeCharactersEntered]) {
            codeCharactersEntered += 1
            if (codeCharactersEntered == targetCode.length) {
                toggleBackgroundColor()
                codeCharactersEntered = 0
            }
        }
        else {codeCharactersEntered = 0}
    })
}

export const toggleBackgroundColor = () => {
    let appContainer = document.getElementById("appContainer")
    if (appContainer.className == "App") {
        appContainer.className = "App2"
    }
    else {
        appContainer.className = "App"
    }
}