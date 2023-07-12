import { Button } from '@/components/Button/Button'
import ws from '@/utils/websocket'

const ChatPage = () => {
  const onSendMsg = () => {
    ws.send({ data: {msg: 'msg'}, type: 5 })
  }
  return <div>
    <Button onClick={onSendMsg}>发送消息</Button>
  </div>
}

export default ChatPage
