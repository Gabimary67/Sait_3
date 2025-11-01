document.addEventListener('DOMContentLoaded', () => {

function showPopup(delay = 60000) {
setTimeout(() => {
document.querySelector('.HOIqBFvMbkPQ').classList.add('HOIqBFvMbkPQ__show');
}, delay);
}

showPopup();

document.querySelector('.HOIqBFvMbkPQ__close').addEventListener('click', () => {
document.querySelector('.HOIqBFvMbkPQ').classList.remove('HOIqBFvMbkPQ__show');

showPopup(120000);
});
});
