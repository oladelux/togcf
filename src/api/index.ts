const apiURI = process.env.REACT_APP_API_URI

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export class UnauthorizedError extends Error {
    constructor(url: string) {
        super(`Unauthorized request to endpoint ${url}`)
    }
}

export class ApiError extends Error {
    constructor(url: string, status: number, public responseBody: string) {
        super(
            `bad request to endpoint ${url}, status ${status}, response body ${responseBody}`
        )
    }
}

async function apiResponse(res: Response) {
    if (res.status === 401) {
        throw new UnauthorizedError(res.url)
    } else if (res.status >= 500) {
        throw new ApiError(res.url, res.status, await res.text())
    } else {
        return res
    }
}

const apiRequest = async (
    endpoint: string,
    method: Method,
    data: object = {}
): Promise<Response> => {
    const requestURL = apiURI + endpoint
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (method === 'GET') {
        return fetch(requestURL, {
            credentials: 'include',
        }).then(apiResponse)
    }

    const res = await fetch(requestURL, {
        method,
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(data),
    })

    return apiResponse(res)
}

type TicketType = {
  /**
   * The source city of the ticket.
   */
  source: string,
  /**
   * The destination city of the ticket.
   */
  destination: string
}

/**
 * Restores a user trip as orignally planned
 * @param tickets Represents user ticket with source and destination information.
 * @returns String of comma separated cities as it was originally planned.
 */
export const restoreUserTrip = (tickets: TicketType[]): string | undefined => {
  const originTrip = tickets.find(ticket => !tickets.some(data => data.destination === ticket.source))

  if (!originTrip) {
    console.error('Origin trip for user not found')
    return
  }

  let nextLocation: TicketType | undefined = originTrip
  let finalDestination: string = ''
  let trip: string[] = []

  while (nextLocation) {
    trip.push(nextLocation.source)
    finalDestination = nextLocation.destination
    nextLocation = tickets.find(ticket => ticket.source === nextLocation?.destination)
  }
  trip.push(finalDestination)
  
  return trip.join(', ')

}
