export interface IExample {
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
export interface IStatResponse {
countries?: number;
  createdAt?: number | string;
  detected_vehicles?: number|string;
  id?: number;
  parking_area?: number|string;
  updatedAt?: string;
  
}

// countries
// : 
// 22
// createdAt
// : 
// "2023-07-21T05:34:04.351Z"
// detected_vehicles
// : 
// "100"
// id
// : 
// 1
// parking_area
// : 
// 300
// updatedAt
// : 
// "2023-07-21T05:34:04.351Z"