import { IResponse } from '~/types/common'

export interface IAuthor {
  id: number
  full_name: string
}
export interface ISpecialReports {
  id: number
  title: string
  slug: string
  author: IAuthor
  cover_image: string
  published_at: string
  views_count: number
}

export interface IReportsResponse extends IResponse {
  results: ISpecialReports[]
}
export interface ISpecialReportsParams {
  offset: number
  limit: number
  search?: string
}
