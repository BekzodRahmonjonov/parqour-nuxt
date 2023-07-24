
const regPhone = /^([+]?[9]{2}[8][0-9]{2}[0-9]{7})$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const isValidPhone = (val: string) => {
  const phone = val.replace(/[\s)(-]/g, '')
  return phone.length === 9 && validPhones.has(phone.substring(0, 2))
}
export const validEmail = (val: string) => {
  if(!val) return false;
  if (emailRegex.test(val)) return true;
  if(!emailRegex.test(val)) return false
}
export const isValidPhoneOrEmail = (val: string) => {
  if(!val) return false;
  if (emailRegex.test(val)||regPhone.test(val)) return  true
  if(!emailRegex.test(val)) return false
  if (!regPhone.test(val)) return false

}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4')
}
