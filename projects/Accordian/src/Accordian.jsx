
import React, { useState } from 'react';
import './styles.css';

const Accordian = ({ id, title, content }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <section className="accordion-card" key={id}>
        <div className="header" onClick={() => setActive(!isActive)}>
          <div>{title}</div>
          <p className={`icon ${isActive ? 'rotate' : ''}`}>{isActive ? "-" : "+"}</p>
        </div>
        <div className={`content ${isActive ? 'show' : ''}`}>
          <p className="card-info">{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Accordian;