const apiURI = process.env.REACT_APP_CMS_API

export class UnauthorizedError extends Error {
  constructor (url: string, status: number, public responseBody: Record<string, unknown>) {
    super(`Unauthorized request to endpoint ${url}, status ${status}, code ${responseBody.code}`)
  }
}

export class ApiError extends Error {
  constructor(url: string, status: number, public responseBody: string) {
    super(
      `bad request to endpoint ${url}, status ${status}, response body ${responseBody}`,
    )
  }
}

/**
 * Error class for API requests resulting in a 4xx status code.
 */
export class ClientError extends Error {
  constructor (url: string, status: number, public responseBody: Record<string, never>) {
    super(`Erroneous request to endpoint ${url}, status ${status}, code ${responseBody.code}`)
  }
}

async function apiResponse(res: Response) {
  const isResponseJson = res.headers.get('content-type')?.includes('application/json')
  if (res.status === 401) {
    const responseBody = isResponseJson ? await res.json() : { code: 'UNKNOWN' }
    throw new UnauthorizedError(res.url, res.status, responseBody)
  } else if (res.status >= 400 && res.status < 500) {
    const responseBody = isResponseJson ? await res.json() : { code: 'UNKNOWN' }
    throw new ClientError(res.url, res.status, responseBody)
  } else if (res.status >= 500) {
    throw new ApiError(res.url, res.status, await res.text())
  } else {
    return res
  }
}

const apiRequest = async (
  endpoint: string,
  method: 'GET',
  data: object = {},
): Promise<Response> => {
  const requestURL = apiURI + endpoint
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (method === 'GET') {
    return fetch(requestURL, {
      headers: headers,
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

export type EventResponseData = {
  id: number
  attributes: {
    Title: string
    Description: string
    Date: string
    Time: string
    Address: string
    Content: string
  }
}

export type EventsResponse = {
  data: EventResponseData[]
  meta: {
    pagination: {
      page: number
      pageSize: 25
      pageCount: number
      total: number
    }
  }
}

export type EventResponse = {
  data: EventResponseData
  meta: {
    pagination: {
      page: number
      pageSize: 25
      pageCount: number
      total: number
    }
  }
}

export async function getEvents(): Promise<EventsResponse> {
  const res = await apiRequest('/api/events', 'GET')
  return await res.json()
}

export async function getEvent(id: string): Promise<{ data: EventResponseData }> {
  const res = await apiRequest(`/api/events/${id}`, 'GET')
  return await res.json()
}
