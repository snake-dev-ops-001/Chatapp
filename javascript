const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');

// Function to create a new message element
function addMessage(message, sender = 'You') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const meta = document.createElement('div');
    meta.classList.add('meta');
    meta.textContent = `${sender} - ${new Date().toLocaleTimeString()}`;
    messageElement.appendChild(meta);

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = message;
    messageElement.appendChild(text);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
}

// Event listener for form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message.trim()) {
        addMessage(message);
        messageInput.value = '';
    }
});