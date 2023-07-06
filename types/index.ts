export interface INews {
  id?: number
  title: string
  date: string
  views: number
  image: string
  category?: string
  isVideo?: boolean
  isVerified?: boolean
  comments?: number
}

export interface ILatest {
  id?: number
  title?: string
  date: string
  time: string
}

export interface IAuthor {
  id: number
  slug: string
  actual: boolean
  title: string
  author: string
  image: string
}

export interface ITabItem {
  label: string
  value: string
}
export interface INavigation {
  icon: string
  title: string
  url: string
}

export const buttonVariants = [
  'primary',
  'secondary',
  'primary-dark',
  'danger',
  'light',
] as const
export type ButtonVariants = (typeof buttonVariants)[number]

export interface IPodcast {
  image: string
  type: string
  title: string
  created_at: Date | string
  typeTitle: string
}

export interface IInterview {
  image: string
  views_count: number
  title: string
  created_at: Date | string
  with_whom: string
  rowFormat?: boolean
}
export interface IColony {
  id: number
  title: string
  image: string
  description: string
  created_at: Date | string
  views_count: number
  userName: string
}

export interface ISocial {
  url: string
  icon: string
  subscribe: number
  title: string
}
export interface ISingleData {
  title: string
  text: string
  image: string
  youtube_video: string
  default: boolean
  standard: boolean
  full_width: boolean
  created_at: Date | string
  views_count: number
  content: string | HTMLAllCollection
  author: string
}
export interface INewsSingleData {
  title: string
  text: string
  image: string
  default: boolean
  standard: boolean
  full_width: boolean
  created_at: Date | string
  views_count: number
  content: string | HTMLAllCollection
  author: string
  author_image: string
}

export interface ISinglePhoto {
  title: string
  text: string
  image: string
  created_at: Date | string
  views_count: number
  content: string | HTMLAllCollection
  author: string
}
