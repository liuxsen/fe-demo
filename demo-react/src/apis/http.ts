import type { AxiosRequestConfig, Method } from 'axios'
import Axios from 'axios'
import { compile } from 'path-to-regexp'

const instance = Axios.create()

interface Payload {
  data?: Record<string, any>
  params?: Record<string, any>
  regInfo?: Record<string, any>
}
const getUrlFromReg = (regUrl: string, payload?: Payload): string => {
  let resUrl: string = regUrl
  if (regUrl.includes(':') && payload?.regInfo) {
    try {
      const toPath = compile(regUrl)
      resUrl = toPath(payload.regInfo)
    }
    catch (error) {
    }
  }
  return resUrl
}

export const awaitWrap = async <T>(p: Promise<T>) => {
  try {
    const res = await p
    return [null, res] as const
  }
  catch (error) {
    // return Promise.reject(error)
    return [error, null] as const
  }
}

// 项目内自己使用的api
export async function http<R>(url: string, method: Method, payload?: Payload) {
  const { data, params } = payload || {}
  const newUrl = getUrlFromReg(url, payload)
  return awaitWrap(instance<any, R, any>({
    url: newUrl,
    method,
    data,
    params,
  }))
}

// 适配 api生成
export function request<T extends { data?: any }>(config: AxiosRequestConfig & { requestType?: 'form' }): Promise<T['data']> {
  return awaitWrap(instance({
    ...config,
    responseType: config.url?.includes('download') ? 'blob' : 'json',
  }))
}
