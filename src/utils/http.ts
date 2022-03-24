/*
 * @Description: 请求axios 封装
 * @Autor: Alfred
 * @Date: 2022-03-13 13:34:20
 * @FilePath: /vite3Vue3TsDemo/src/utils/http.ts
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'
import NProgress from 'nprogress'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器')
        return res
      },
      (err: any) => err
    )

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosRequestConfig) => {
        console.log('全局响应拦截器')
        return res
      },
      (err: any) => err
    )
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request
