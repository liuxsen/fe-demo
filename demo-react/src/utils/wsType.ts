// 消息类型
export enum WsRequestMsgType {
  // 1 请求登录二维码
  RequestLoginQrCode = 1,
  // 2 心跳监测
  HeartBeatDetection,
  // 3 用户认证
  Authorization,
  // 初始化ws
  initWS,
  // ws连接成功
  wsOpen,
  // ws 连接关闭
  wsClose,
  // ws 连接错误
  wsErr,
  // 发送消息
  message,
  // 接收到消息
  receiveMsg,
}

// 消息体
export interface WsReqMsgContentType {
  type: WsRequestMsgType
  data?: Record<string, unknown>
}
