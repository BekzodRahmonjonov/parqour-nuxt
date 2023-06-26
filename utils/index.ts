export function formatNumberWithSpaces(number: number) {
  const strNumber = number.toString()

  const parts = strNumber.split('.')
  const integerPart = parts[0]
  const decimalPart = parts[1] ? '.' + parts[1] : ''

  let formattedIntegerPart = ''
  for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
    formattedIntegerPart = integerPart[i] + formattedIntegerPart
    if (count % 3 === 2 && i > 0) {
      formattedIntegerPart = ' ' + formattedIntegerPart
    }
  }

  return formattedIntegerPart + decimalPart
}

const timeouts = {}

const cTimeout = (key = 'key') => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key])
    timeouts[key] = undefined
  }
}

export const debounce = (key = 'key', fn = () => {}, timeout = 500) => {
  const sTimeout = (key, fn, timeout) => {
    cTimeout(key)

    timeouts[key] = setTimeout(() => {
      try {
        fn()
      } catch (e) {
        console.log(e)
      }

      timeouts[key] = undefined
    }, timeout)
  }

  return sTimeout(key, fn, timeout)
}

const validPhones = [
  '90',
  '91',
  '33',
  '50',
  '93',
  '94',
  '88',
  '95',
  '97',
  '98',
  '99',
  '77',
]
export const isValidPhone = (val: string) => {
  const phone = val.replace(/[\s)(-]/g, '')
  return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}
