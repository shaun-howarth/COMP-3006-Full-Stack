const socket = io('http://localhost:8080')
const messageContainer = document.getElementById('message-wrapper')
const messageForm = document.getElementById('send-wrapper')
const messageInput = document.getElementById('message-input')

const username = prompt('Please enter your chat name!')
appendMessage('You have joined the chat room.')
socket.emit('new-user', username)

// chat message data transmission
socket.on('chat-message', data => {
    appendMessage(data.username + ": " + data.message)
})

// user/client connected transmission
socket.on('user-connected', username => {
    appendMessage(username + " Connected");
    
})

// user/client disconnected transmission
socket.on('user-disconnected', username => {
    appendMessage(username + " Disconnected");
    
})

// message input value transmission
messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage("You: " + message);
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

// message input value transmission: creating message element div for text area
function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}