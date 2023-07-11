import { http2 } from './http2'
import { http } from './http'

const res = http()
http2()
console.log(res)
/**
 * sum
 */
export const sum = () => {
  const arr: number[] = []
  arr.map(item => {
    console.log(1)
  })
}