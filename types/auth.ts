export  interface IAuthLogin {
  password: string,
  phone: string,
  email:string
}
export  interface IAuthRegister {
  full_name: string,
  password: string,
  phoneOrEmail: string,
}
export interface IAuthLoginResponse {
  refresh: string,
  access: string,
}
export  interface IAuthRegisterResponse {}
