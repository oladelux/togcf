import { useState, useEffect } from 'react'
import { EventResponseData, EventsResponse, getEvent, getEvents } from '../api'

type UseEventsResult = {
  events: EventsResponse['data'] | null
  event: EventResponseData | null
  loading: boolean
  error: Error | null
}

export const useEvents = (eventId?: string): UseEventsResult => {
  const [events, setEvents] = useState<EventsResponse['data'] | null>(null)
  const [event, setEvent] = useState<EventResponseData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if(eventId){
          const eventResponse = await getEvent(eventId)
          setEvent(eventResponse.data)
        } else {
          const eventsResponse = await getEvents()
          setEvents(eventsResponse.data)
        }
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [ eventId ])

  return { events, event, loading, error }
}
