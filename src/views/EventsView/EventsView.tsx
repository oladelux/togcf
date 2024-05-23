import { Link } from 'react-router-dom'

import { useEvents } from '../../hooks/useEvents'

import './EventsView.scss'
import { formatDate } from '../../constants/date';

export const EventsView = () => {
  const { events, loading, error } = useEvents()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='Events-view'>
      <div className='Events-view__header'>
        <div className='Events-view__header-title'>Our Events</div>
      </div>
      <div className='Events-view__events'>
        {events && events.length > 0 ? (
          events.map(event => (
            <Link key={event.id} to={`/events/${event.id}`} className='Events-view__events-item'>
              <div className='Events-view__events-item-overlay'>
                <img className='Events-view__events-item-overlay--img' src={event.attributes.Image.data.attributes.formats.small.url} alt='event-logo' />
                <div className='Events-view__events-item-overlay--text'>
                  <div className='Events-view__events-item-overlay--text-date'>{formatDate(event.attributes.Date)}</div>
                </div>
              </div>
              <div className='Events-view__events-item-content'>
                <div className='Events-view__events-item-content--title'>{event.attributes.Title}</div>
              </div>
            </Link>
          ))) : (
          <div>No events found.</div>
        )}
      </div>
    </div>
  )
}
