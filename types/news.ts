import { IPagination, IResponse } from '~/types/common'

export interface INewsSearchListParams extends IPagination {
  hashtags__slug?: undefined | string
  model_type?: undefined | string
  search?: undefined | string
}
export interface IHashtag {
  id: number
  title: string
  slug: string
}
export interface INewsSearch {
  cover_image: string
  hashtags: IHashtag[]
  id: number
  model_type: string
  slug: string
  subtitle: string
  title: string
  views_count: number
  published_at: string | Date
}
export interface INewsResponse extends IResponse {
  results: INewsSearch[]
}
