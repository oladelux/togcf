import { useEffect, useState } from 'react'
import { EventResponseData, EventsResponse } from '../api'
import { appEvents, singleAppEvents } from '../constants/data';

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
          setEvent(singleAppEvents.data)
        } else {
          setEvents(appEvents.data)
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
