import { useEffect, useState } from 'react'
import { EventResponseData, EventsResponse } from '../api'
import { appEvents } from '../constants/data';

type UseEventsResult = {
  events: EventsResponse['data'] | null
  event: EventResponseData | undefined
  loading: boolean
  error: Error | null
}

export const useEvents = (eventId?: string): UseEventsResult => {
  const [events, setEvents] = useState<EventsResponse['data'] | null>(null)
  const [event, setEvent] = useState<EventResponseData | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if(eventId){
          const filterEvent = appEvents.data.find((event) => event.id === eventId)
          setEvent(filterEvent)
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
