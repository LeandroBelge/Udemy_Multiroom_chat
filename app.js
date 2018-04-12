/*Importar as configurações do servidor*/
var app = require('./config/server');

/*Parametrizar porta de escuta*/
var server = app.listen(80, function(){
    console.log('Servidor online');
})

var io = require('socket.io').listen(server);

/*Criar a conexão po websocket*/
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    })
});