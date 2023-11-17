import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";

//component import
import CalendarComponent from '../../components/calendarv1/Calendar';

// Css import
import './eventPage.scss';

function EventPage (){



    return (
        <div className='event__page'>
            <CalendarComponent />

        </div>

    )
};

export default EventPage;