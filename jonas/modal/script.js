const modalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

Array.from(modalButtons).forEach((btn) => {
  btn.addEventListener('click', showModal);
});

document.querySelector('.close-modal').addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) hideModal();
  }
});
