import { useState, useEffect } from 'react';
import { Calendar } from 'antd';
import axios from 'axios';
import './Calendar.scss';

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('http://localhost:8080/api/calendar/events');
                setEvents(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError('Failed to fetch events');
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const dateCellRender = (value) => {
        const formattedDate = value.format('YYYY-MM-DD');
        const dayEvents = events.filter(event => {
            // Check for 'dateTime' for specific-time events or 'date' for all-day events
            const eventDate = event.start.dateTime ? event.start.dateTime.split('T')[0] : event.start.date;
            return eventDate === formattedDate;
        });

        return (
            <ul className="events">
                {dayEvents.map((event, index) => (
                    <li key={index}>
                        {event.summary} {/* You can add more event details here if needed */}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            {isLoading && <div className="calendar-loading">Loading events...</div>}
            {error && <div className="calendar-error">Error: {error}</div>}
            {!isLoading && !error && (
                <Calendar dateCellRender={dateCellRender} />
            )}
        </div>
    );
};

export default CalendarComponent;
