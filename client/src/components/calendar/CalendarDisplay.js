
// Dependancies import
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Css import
import './Calendar.scss';

const CalendarDisplay = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/outlook/fetch-events');
                setEvents(response.data.value); // Assuming the response has a value array
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Outlook Calendar Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.subject} - {new Date(event.start.dateTime).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarDisplay;
