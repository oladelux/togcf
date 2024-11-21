import {FC} from "react"
import { Link } from 'react-router-dom'

import { useEvents } from '../../hooks/useEvents'
import { formatFullDate, formatTime } from '../../constants/date'

import './Events.scss'

export const Events: FC = () => {

    const { events } = useEvents()
    //Get latest event by date
    const latestEvent = events?.sort((a, b) => new Date(b.attributes.Date).getTime() - new Date(a.attributes.Date).getTime())[0]

    return (
        <div className='Events' id='events'>
            <div className='Events__overview'>
                <div className='Events__overview-title'>Latest Events</div>
                <div className='Events__overview-content'>
                    <div className='Events__overview-content-media'>
                        <img src={latestEvent?.attributes.Image.data.attributes.formats.small.url} alt='events' width={300} />
                    </div>
                    <div className='Events__overview-content-details'>
                        {latestEvent && <><Link to={`/events/${latestEvent.id}`} className='Events__overview-content-details--title'>
                            {latestEvent.attributes.Title}
                        </Link>
                            <div className='Events__overview-content-details--date'><span
                              className='bold'>Date:</span> {formatFullDate(latestEvent.attributes.Date)}</div>
                            <div className='Events__overview-content-details--time'><span
                              className='bold'>Time:</span> {formatTime(latestEvent.attributes.Time)}</div>
                            <div className='Events__overview-content-details--address'>
                                <span className='bold'>Address:</span> {latestEvent.attributes.Address}
                            </div>
                        </>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
