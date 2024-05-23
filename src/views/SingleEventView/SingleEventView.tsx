import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'

import { useEvents } from '../../hooks/useEvents'

import SipImage from  '../../assets/images/sip.jpg'

import './SingleEventView.scss'
import { formatFullDate, formatTime } from '../../constants/date';

export const SingleEventView = () => {
  const {eventId} = useParams()

  const { event, loading, error } = useEvents(eventId)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='Single-event-view'>
      <div className='Single-event-view__header'>
        <div className='Single-event-view__header-title'>
          <div className='Single-event-view__header-title--text'>{event?.attributes.Title}</div>
          <div className='Single-event-view__header-title--date'>
            <TodayOutlinedIcon/> {event && formatFullDate(event.attributes.Date)}</div>
          <div className='Single-event-view__header-title--date'>
            <WatchLaterOutlinedIcon/> {event && formatTime(event.attributes.Time)}</div>
          <div className='Single-event-view__header-title--date'>
            <RoomOutlinedIcon/> {event && event.attributes.Address}</div>
        </div>
        <img className='Single-event-view__header-image' src={SipImage} alt='sip'/>
      </div>
      <div className='Single-event-view__content'>
        <Markdown>{event?.attributes.Content}</Markdown>
      </div>
    </div>
  )
}
