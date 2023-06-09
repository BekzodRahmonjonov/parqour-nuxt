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

export const buttonVariants = ['primary', 'secondary', 'primary-dark'] as const
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