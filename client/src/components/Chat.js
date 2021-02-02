import React from 'react'
import { io } from 'socket.io-client'

const Chat = () => {
  const socket = io('http://localhost:5000')
  console.log(socket)
  return <div>chat</div>
}

export default Chat
