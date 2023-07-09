export interface IPagination {
  offset: number
  limit: number
}

export interface IResponse {
  count: number
  next: string | null
  previous: null | string
}
