const noButton = document.getElementById('noButton');

// Função para mover o botão para uma posição aleatória
function moveButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Calcula a nova posição aleatória dentro dos limites da caixa
    const offsetX = Math.random() * (containerRect.width - noButtonRect.width);
    const offsetY = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
}

// Função para detectar a proximidade do mouse e mover o botão
function handleMouseOver(event) {
    const distance = 50; // Distância em pixels para detectar a proximidade do mouse
    const noButtonRect = noButton.getBoundingClientRect();

    // Calcula a distância do mouse até o botão
    const mouseDistance = Math.sqrt(
        Math.pow(event.clientX - (noButtonRect.left + noButtonRect.width / 2), 2) +
        Math.pow(event.clientY - (noButtonRect.top + noButtonRect.height / 2), 2)
    );

    // Verifica se o mouse está suficientemente próximo
    if (mouseDistance < distance) {
        moveButton();
    }
}

// Adiciona o evento de movimento do mouse ao botão "Não"
noButton.addEventListener('mousemove', handleMouseOver);

// Evento para o botão "Sim"
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function () {
    alert('Ótimo! Vamos nos encontrar no sábado!');
});
