const noButton = document.getElementById('noButton');

// Função para calcular uma nova posição aleatória para o botão
function moveButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Adiciona um deslocamento aleatório maior para o botão
    const offsetX = Math.random() * (containerRect.width - noButtonRect.width) - noButtonRect.width / 2;
    const offsetY = Math.random() * (containerRect.height - noButtonRect.height) - noButtonRect.height / 2;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.max(0, offsetX)}px`;
    noButton.style.top = `${Math.max(0, offsetY)}px`;
}

// Função para mover o botão ao passar o mouse por cima
function handleMouseOver(event) {
    // Verifica se o mouse está suficientemente próximo para mover o botão
    const distance = 80; // Distância em pixels para detectar a proximidade do mouse
    const noButtonRect = noButton.getBoundingClientRect();

    if (
        event.clientX >= noButtonRect.left - distance &&
        event.clientX <= noButtonRect.right + distance &&
        event.clientY >= noButtonRect.top - distance &&
        event.clientY <= noButtonRect.bottom + distance
    ) {
        moveButton();
    }
}

// Adiciona o evento de mouseover ao botão "Não"
noButton.addEventListener('mousemove', handleMouseOver);

// Evento para o botão "Sim"
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function () {
    alert('Ótimo! Vamos nos encontrar no sábado!');
});
