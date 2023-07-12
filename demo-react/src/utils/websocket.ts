import { worker } from './initWorker'
import { type WsReqMsgContentType, WsRequestMsgType } from './wsType'

class Ws {
  #connectReady = false
  #tasks: WsReqMsgContentType[] = []

  constructor() {
    worker.postMessage(`{"type":"${WsRequestMsgType.initWS}"}`)
    worker.addEventListener('message', this.onWorkerMsg)
  }

  #send = (params: WsReqMsgContentType) => {
    worker.postMessage(JSON.stringify(params))
  }

  send = (data: Record<string, any>) => {
    if(this.#connectReady){
      this.#send({
        type: WsRequestMsgType.message,
        data,
      })
    } else {
      this.#tasks.push({
        type: WsRequestMsgType.message,
        data,
      })
    }
  }

  #clearTasks = () => {
    this.#connectReady = true
    // TODO: 监测登录状态等
    setTimeout(() => {
      this.#tasks.forEach(task => {
        this.#send(task)
      })
      this.#tasks = []
    }, 500);
  }
  #close(){
    this.#connectReady = false
  }
  #onMessage = ({type, data}: Record<string, any>) => {
    console.log(JSON.parse(data))
  }

  onWorkerMsg = (e: MessageEvent) => {
    const data = JSON.parse(e.data)
    switch (data.type) {
      case WsRequestMsgType.wsOpen:
        console.log('连接成功')
        // 清空任务队列
        this.#clearTasks()
        break;
      case WsRequestMsgType.wsClose:
        this.#close()
        break;
      case WsRequestMsgType.receiveMsg:
        this.#onMessage(data)
        break;
      default:
        break
    }
  }
}
const ws = new Ws()
export default ws
