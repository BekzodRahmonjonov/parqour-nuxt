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

export interface INewsList {
  id: number
  slug: string
  title: string
  views_count: number
  published_at: string
  cover_image: string
  comment_count: number
  is_verified: boolean
  is_video: boolean
  category: {
    id: number
    title: string
    type: string
  }
}

export interface ILatest {
  id?: number
  title?: string
  date: string
  time: string
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
  id: number
  slug: string
  image: string
  views_count: number
  title: string
  cover_image: string
  rowFormat?: boolean
  published_at: number
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
export interface IAuthorsData {
  id: number
  title: string
  slug: string
  type: string
  actual: boolean
  author: {
    id: number
    full_name: string
  }
  cover_image: string
}

export interface IDiscussionData {
  id: number
  slug: string
  title: string
  subtitle: string
  author: {
    id: number
    full_name: string
    avatar: string
  }
}
