import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './styles.css'

const HiddenSearchBar = () => {

    const [showInput, setInput] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const handleClick = (e) => {
        setBgColor("#1a1a1a");
        if (e.target.className === 'container') {
            setInput(false);
            setBgColor("#fff")
        }
    }

    return (
        <div>

            <section
                style={{ backgroundColor: bgColor }}
                onClick={handleClick}>
                {showInput ?
                    (<input type="text" placeholder='Search anything...' />) :
                    (<FaSearch onClick={() => setInput(true)} />)}
            </section>

        </div>
    )
}

export default HiddenSearchBar

