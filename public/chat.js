(function () {
    'use strict';

    //get dom elements
    const messageDiv = document.getElementById('messages');
    const submit = document.getElementById('submit');
    const message = document.getElementById('message');
    const socketIo = io();

    //when recive a message from server, append it to messages
    socketIo.on('msg', msg => {
        const span = document.createElement('span');
        span.id = "broadcasted"
        span.innerText = msg;
        messageDiv.append(span);

    });



    submit.addEventListener('click', sendMessage);

    function sendMessage() {
        if (message.value) {

            //emit message to the server
            socketIo.emit('msg', message.value);
            //appen message to this sockets UI
            const span = document.createElement('span')
            span.id = 'thisSocket';
            span.innerText = message.value;
            messageDiv.append(span);
        }
        message.value = "";
    }
})();