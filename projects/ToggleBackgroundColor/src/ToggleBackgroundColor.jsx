import React, { useState } from 'react'
import './styles.css'

const ToggleBackgroundColor = () => {

    const [bgcolor, setColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [btnStyle, setBtnStyle] = useState("white");

    function toggleColor() {
        setColor(bgcolor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setBtnStyle(bgcolor === "white" ? "#1b1b1b" : "white");
    };

    return (
        <section style={{ backgroundColor: bgcolor, color: textColor }}>
            <button onClick={toggleColor}
                style={{
                    btnStyle,
                    color: textColor,
                    border: `2px solid ${textColor}`
                }}>

                {bgcolor === "#1b1b1b" ? 'Black Theme' : 'White Theme'}
            </button>
            <section className="content"><h1>
                Welcome to the <br /> Real World....</h1></section>
        </section>
    );
}

export default ToggleBackgroundColor