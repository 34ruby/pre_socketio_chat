const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http, { cors: { origin: "*" }})

app.use('/style', express.static(__dirname + '/style'))
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', (socket) => {
    console.log('채팅방 연결이 되어있음!')
    socket.on('message', (msg) => io.emit('message', msg))
    // socket.on('message', (msg) => console.log(msg))
})

http.listen(3000, () => {
    console.log('node 서버 작동중 port 3000')
})