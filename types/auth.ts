export  interface IAuthLogin {
  email: string,
  password: string,
  phone: string,
}
export  interface IAuthRegister {
  full_name: string,
  password: string,
  phone: string,
  email: string,
}
export interface IAuthLoginResponse {
  refresh: string,
  access: string,
}
export  interface IAuthRegisterResponse {}
