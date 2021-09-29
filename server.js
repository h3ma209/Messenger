const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
        methods: ['GET', "POST"]
    }
});
io.on('connection', (socket)=>{
    console.log('Connected')
    socket.on('test', msg=> console.log(msg))

})

server.listen(5000,()=> console.log('server is running on 5000') )