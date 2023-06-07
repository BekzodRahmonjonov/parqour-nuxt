export interface INews {
  id: number
  title: string
  date: string
  views: number
  image: string
  category: string
  isVideo: boolean
}
export const buttonVariants = ['primary', 'secondary'] as const
export type ButtonVariants = (typeof buttonVariants)[number]
