const socket = io("/");

socket.emit("join-room", ROOM_ID, 10);

socket.on('user-joined', userId =>{
    console.log('User joined: ' + userId)
})