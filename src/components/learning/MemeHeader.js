import React from "react";
import "../meme.css";
class MemeHeader extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" />
                <p>Meme Generator</p>
            </header>

        )

    }
}

export default MemeHeader