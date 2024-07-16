const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

// For testing, hardcode a room ID
const TEST_ROOM_ID = 'test-room'

app.get('/', (req, res) => {
  // Redirect all users to the same test room
  res.redirect(`/${TEST_ROOM_ID}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    console.log(`User ${userId} joined room ${roomId}`) // Debugging line
    socket.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
      console.log(`User ${userId} disconnected from room ${roomId}`) // Debugging line
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})
