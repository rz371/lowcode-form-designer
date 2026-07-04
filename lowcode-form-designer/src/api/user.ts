import request from './request'

export interface LoginParams {
  username: string
  password: string
}

export function loginApi(data: LoginParams) {
  return request.post('/user/login', data)
}

export function getUserInfoApi() {
  return request.get('/user/info')
}