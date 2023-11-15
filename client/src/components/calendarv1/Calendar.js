// CalendarComponent.js
import React from 'react';
import { Calendar } from 'antd';
import './Calendar.scss'; // Make sure this path is correct

const CalendarComponent = () => {
  // You can add more logic or state here if needed

  return (
    <div className="calendar-container">
      <Calendar fullscreen={false} />
      {/* You can add more interactive elements or details here if needed */}
    </div>
  );
};

export default CalendarComponent;
