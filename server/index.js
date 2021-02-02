const PORT = process.env.PORT || 5000
const OIRGIN = 'http://localhost:3000'
const app = require('express')()
const server = require('http').createServer(app)
const options = {
  cors: { origin: OIRGIN },
}
const io = require('socket.io')(server, options)

io.on('connection', (socket) => {
  console.log('We have a new Connection')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
