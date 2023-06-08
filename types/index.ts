export interface INews {
  id?: number
  title: string
  date: string
  views: number
  image: string
  category?: string
  isVideo?: boolean
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
