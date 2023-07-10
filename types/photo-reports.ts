export interface IPhotoReports {
  id: number
  title: string
  slug: string
  cover_image: string
  images: [
    {
      id: number
      image: string
    }
  ]
  images_count: number
}
