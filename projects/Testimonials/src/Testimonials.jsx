import React, { useState } from 'react'
import data from '../testimonialData.json'
import './styles.css'

const Testimonials = () => {

    const [currIndex, setIndex] = useState(0);
    const decreaseIndex = () => {

        let newIndex = currIndex - 1;
        if (newIndex < 0) {
            setIndex(currIndex)
        }
        else {
            setIndex(currIndex - 1)
        }
    }

    const increaseIndex = () => {
        let newIndex = currIndex + 1;
        if (newIndex > (data.length - 1)) {
            setIndex(currIndex)
        }
        else {
            setIndex(currIndex + 1)
        }
    }
    return (
        <div className="testimonials-container">
            <img
                src={data[currIndex].image}
                alt={`Profile of ${data[currIndex].name}`}
            />
            <p className="name">{data[currIndex].name}</p>
            <p className="designation">{data[currIndex].designation}</p>
            <p className="testimonial">{data[currIndex].testimonial}</p>
            <div className="button-group">
                <button type="button" onClick={decreaseIndex}>
                    Previous
                </button>
                <button type="button" onClick={increaseIndex}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Testimonials