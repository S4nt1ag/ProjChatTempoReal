const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io("https://proj-chat-tempo-real.vercel.app/");

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== '') {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = '';
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); //<li></li>
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');// <li className="mensagem"></li>
    chat.appendChild(elementoMensagem);
})