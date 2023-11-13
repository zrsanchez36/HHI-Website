import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";

//component import
import CalendarDisplay from '../../components/calendar/CalendarDisplay';

// Css import
import './eventPage.scss';

function EventPage (){



    return (
        <div className='event__page'>
            <CalendarDisplay />

        </div>

    )
};

export default EventPage;