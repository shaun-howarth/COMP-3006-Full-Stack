const socket = io('http://localhost:8080')
const messageContainer = document.getElementById('message-wrapper')
const messageForm = document.getElementById('send-wrapper')
const messageInput = document.getElementById('message-input')

const username = prompt('Please enter your chat name!')
appendMessage('You have joined the chat room.')
socket.emit('new-user', username)

socket.on('chat-message', data => {
    appendMessage(data.username + ": " + data.message)
})

socket.on('user-connected', username => {
    appendMessage(username + " Connected");
    
})

socket.on('user-disconnected', username => {
    appendMessage(username + " Disconnected");
    
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage("You: " + message);
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}