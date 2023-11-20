// Accordion.js
import { useState } from 'react';
import './Accordion.scss'; 

const Accordion = ({ title, children, backgroundImage }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const titleStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  
    return (
      <div className="accordion-wrapper">
        <div
          className={`accordion-title ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          style={titleStyle}
        >
          <h2>{title}</h2>
        </div>
        {isOpen && (
          <div className={`accordion-item`}>
            <div className="accordion-content">{children}</div>
          </div>
        )}
      </div>
    );
  };
  
  export default Accordion;
