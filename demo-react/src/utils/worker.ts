import { WsRequestMsgType } from './wsType'

let connection: WebSocket
// 心跳timer
let heartTimer: number | null = null
// 重连timer
let timer: number | null = null
// 重连次数
let reconnetCount = 0
// 重连最大次数
const reconnetMaxCount = 100
// 标识是否正在重连
let lockReconnect = false

const postMsg = (type: WsRequestMsgType, data?: Record<string, any>) => {
  postMessage(JSON.stringify({
    type,
    data,
  }))
}

const connectionSend = (data: Record<string, any>) => {
  connection.send(JSON.stringify(data))
}

// 发送心跳包
const sendHeartPack = () => {
  heartTimer = setInterval(() => {
    connectionSend({ type: 2 })
  }, 9900) as unknown as number
}

// 清除心跳
const clearHeartPickTimer = () => {
  if(heartTimer){
    clearInterval(heartTimer)
  }
  heartTimer = null
}

const onOpen = () => {
  postMsg(WsRequestMsgType.wsOpen)
  sendHeartPack()
}
const onClose = () => {
  console.log(reconnetCount)
  clearHeartPickTimer()
  console.log('close')
  if(lockReconnect) return
  // 标识正在重新连接
  lockReconnect = true
  // 清除重连timer
  if(timer){
    clearTimeout(timer)
    timer = null
  }
  // 检查重连次数,如果超过次数，就停止重新连接
  if(reconnetCount >= reconnetMaxCount){
    console.log('重连次数过多')
    return
  }
  // 重新连接
  reconnetCount++
  timer = setTimeout(() => {
    initConnection()
    // 标识重连任务已经结束
    lockReconnect = false
  }, 1000) as unknown as number;
}
const onMessage = (e: any) => {
  postMsg(
    WsRequestMsgType.receiveMsg,
    e.data
  )
}
const onError = () => {
  console.log('error')
}

const initConnection = () => {
  connection?.removeEventListener('open', onOpen)
  connection?.removeEventListener('close', onClose)
  connection?.removeEventListener('message', onMessage)
  connection?.removeEventListener('error', onError)
  connection = new WebSocket(import.meta.env.VITE_SOCKET_URL)
  connection.addEventListener('open', onOpen)
  connection.addEventListener('close', onClose)
  connection.addEventListener('message', onMessage)
  connection.addEventListener('error', onError)
}

// webworker 线程
onmessage = (e) => {
  const payload = JSON.parse(e.data)
  const type = Number(payload.type)
  switch (type) {
    case WsRequestMsgType.initWS:
      initConnection()
      break
    case WsRequestMsgType.message:
      connectionSend(payload.data)
      break

    default:
      break
  }
  // console.log('获取到消息', e)
}
