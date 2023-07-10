import dayjs from 'dayjs'

export function formatMoneyDecimal(number: any, fix = 0, option = 'decimal') {
  let style: string
  if (['USD', 'RUB'].includes(option)) {
    style = 'currency'
  } else if (['kilogram', 'meter', 'percent'].includes(option)) {
    style = 'unit'
  } else {
    style = ''
  }

  const newStyle: string = style
  const option2 = {
    newStyle, //  unit currency percent decimal
    [newStyle]: option,
    maximumFractionDigits: fix,
    minimumFractionDigits: fix,
  }
  return number
    ? new Intl.NumberFormat('ru-RU', option2).format(number)
    : '0,00'
}
export function getTimeText(time: Date, t: Function) {
  const now = Date.now()
  const gTime = new Date(time).getTime()
  const diff = now - gTime
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (seconds < 60) {
    return 'just now'
  } else if (minutes < 60) {
    return `${minutes} ${t('minute')}${minutes > 1 ? 's' : ''} ago`
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (days < 7) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (weeks < 4) {
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
}
export function formatNumber(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
export function getSevenDaysBeforeToday() {
  const today = new Date() // Get the current date
  const sevenDaysBefore = new Date(today) // Create a new Date object with the same date as today

  sevenDaysBefore.setDate(today.getDate() - 7) // Subtract 7 days from the current date

  return dayjs(sevenDaysBefore).format('YYYY.MM.DD') // Output the result in the given format
}
