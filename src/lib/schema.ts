export interface Response<T> {
  success: boolean
  data?: T
  error?: string
}

export interface ResponseData {
  body: string
  headers: any
}
