export interface IPagination {
  offset: number
  limit: number
}

export interface IResponse<T> {
  count: number
  next: string | null
  previous: null | string
  results: T[]
}
