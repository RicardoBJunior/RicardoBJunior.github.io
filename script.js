const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    const offsetX = Math.random() * (containerRect.width - noButtonRect.width);
    const offsetY = Math.random() * (containerRect.height - noButtonRect.height);

    noButton.style.position = 'absolute';
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
});

const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function() {
    alert('Ótimo! Vamos nos encontrar no sábado!');
});
