const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', "POST"]
    }
});

var connected_users = {}
var msgs = [
    { username: 'hema', content: 'hey thi test', socket_id: '3hsk12ian' },
    { username: 'john', content: 'hey this is test', socket_id: '3hsk1' },
    { username: 'john', content: 'hey this is test', socket_id: '3hsk12ian' },
    { username: 'john', content: 'hey this is test', socket_id: '3hsk1' },
]

io.on('connection', (socket) => {
    console.log('Connected')
    socket.emit('getSocketId', socket.id)
    socket.emit('getMsgs', msgs)

    socket.on('sendCreds', (msg) => {
        connected_users[socket.id] = msg
        console.log(connected_users)

    })
    socket.on('sendMsg', (data) => {
        msgs.push(data)
        console.log('added msg')
        io.emit('updateMsgs', msgs)
    })

})

server.listen(5000, () => console.log('server is running on 5000'))