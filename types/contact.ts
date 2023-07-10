export interface IContactItem {
  id: number
  type: string
  link: string
  email: string
  telegram_link: string
  phone_number: string
}

export interface IContactApplication {
  id: number
  title: string
  icon: string
  items: IContactItem[]
  mixedItems?: IContactItem[][]
  type?: string
}
