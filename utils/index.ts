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
