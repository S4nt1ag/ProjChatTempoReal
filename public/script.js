const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    enviarMensagem();
});

caixaMensagem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        enviarMensagem();
    }
});

function enviarMensagem() {
    if (caixaMensagem.value !== '') {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = '';
    }
}

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
    chat.scrollTop = chat.scrollHeight;
});