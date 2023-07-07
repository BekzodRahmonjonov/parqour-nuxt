import { IResponse } from '~/types/common'

export interface IInterviews {
  cover_image: string
  id: number
  slug: string
  title: string
  views_count: number
}
export interface IInterviewResponse extends IResponse {
  results: IInterviews[]
}
