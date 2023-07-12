const url = new URL('./worker.ts', import.meta.url)
// console.log(url)
export const worker: Worker = new Worker(url, {
  type: 'module',
})
