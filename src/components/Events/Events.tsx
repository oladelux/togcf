import {FC} from "react"

import EventImage from '../../assets/images/event.jpg'

import './Events.scss'
export const Events: FC = () => {
    return (
        <div className='Events' id='events'>
            <div className='Events__overview'>
                <div className='Events__overview-title'>Events</div>
                <div className='Events__overview-content'>
                    <div className='Events__overview-content-media'>
                        <img src={EventImage} alt='events' width={300} />
                    </div>
                    <div className='Events__overview-content-details'>
                        <div className='Events__overview-content-details--title'>A pad a girl 2023</div>
                        <div className='Events__overview-content-details--theme'><span className='bold'>Theme:</span> Girls The Change-Makers</div>
                        <div className='Events__overview-content-details--date'><span className='bold'>Date:</span> 27th November, 2023</div>
                        <div className='Events__overview-content-details--time'><span className='bold'>Time:</span> 10:00AM</div>
                        <div className='Events__overview-content-details--address'>
                            <span>Aroro community grammer school, Aroro-kole, Ojoo Ibadan</span>
                            <span>Samuel Adegbite Memorial Grammer School, Igbo Oloyin, Ibadan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
