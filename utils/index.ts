export const share = (network: string, title: string) => {
  if (process.client) {
    switch (network) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${window.location.href}&text=${title}`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${title}\n+${window.location.href}`,
          '_blank'
        )
        break
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?t=${title}\n${window.location.href}`,
          '_blank'
        )
        break
    }
  }
}

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

export const toEmbed = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    return match[2]
  } else {
    return 'error'
  }
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

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4')
}
