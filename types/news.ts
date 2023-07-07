import { IPagination, IResponse } from '~/types/common'

export interface INewsParams extends IPagination {
  category?: string
  published_at?: string | Date
}
export interface IHashtag {
  id: number
  title: string
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
}
export interface INewsResponse extends IResponse {
  results: INewsSearch[]
}
