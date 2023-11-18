import { useState, useEffect } from 'react';
import { Calendar } from 'antd';
import axios from 'axios'; // Make sure axios is imported
import './Calendar.scss'; 

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/calendar/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    const dateCellRender = (value) => {
        const formattedDate = value.format('YYYY-MM-DD');
        const dayEvents = events.filter(event => {
            // Assuming 'event.start' is in ISO format or similar
            const eventDate = event.start.split('T')[0];
            return eventDate === formattedDate;
        });

        return (
            <ul className="events">
                {dayEvents.map((event, index) => (
                    <li key={index}>
                        {event.summary} {/* Or any other event property */}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <Calendar dateCellRender={dateCellRender} />
    );
};

export default CalendarComponent;
