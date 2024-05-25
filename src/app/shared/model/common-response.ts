export interface ICommonResponse<T> {
    message?: string
    statusCode?: number
    pageResult?: IPaging | null
    data: T
}
interface IPaging {
    totalItems: number
    currentPage: number
    pageSize: number
    totalPages: number
  }