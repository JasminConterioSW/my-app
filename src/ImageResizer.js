// https://www.npmjs.com/package/react-image-file-resizer

import React from "react";
import Resizer from "react-image-file-resizer"

export const ResizeImage =  (file) => {
    Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
            console.log(uri);
            this.setState({ newImage: uri });
        },
        "base64",
        200,
        200

    )

}