'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function hiddenModal(e) {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
  console.log(e);
}

function openModal() {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', hiddenModal);

overLay.addEventListener('click', hiddenModal);

document.addEventListener('keydown', function (e) {
  // console.log('a key was pressed');
  if (e.key === 'Escape') {
    hiddenModal();
  }
  console.log(e);
});
