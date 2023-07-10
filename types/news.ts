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
export interface INewsCommentSlug {
  slug: string
}
interface INewsCommentItem {
  answers_count: number,
  children:INewsCommentItem,
  comment: string,
  id: number,
  rate_count: number,
  status: string,
  user:{
    avatar: string,
    full_name: string,
    id: number,
    created_at: string,
  }
}
export interface INewsCommentRequest {
data:INewsCommentItem[]
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

export interface IPopularList {
  id: number
  title: string
  subtitle: string
  published_at: string
  cover_image: string
  views_count: number
}
export interface IDiscussionList {
  id: number
  slug: string
  title: string
  subtitle: string
  author: {
    id: number
    full_name: string
    avatar: string
  }
  category: {
    id: number
    title: string
    type: string
    slug: string
  }
  created_at: string
  views_count: number
}
