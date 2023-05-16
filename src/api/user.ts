import request from '@/utils/http'
interface LoginParams {
  username: string
  password: string
}
export const login = (data?: LoginParams) => request.post('/login', data)
