export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'short' })
  return `${day} ${month}`
}

export const formatFullDate = (dateString: string): string => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  return `${day} ${month}, ${year}`
}

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':').map(Number)
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`
}
