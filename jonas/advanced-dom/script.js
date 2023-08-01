'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
   e.preventDefault();
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
   }
});

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'Hello there, this is a cookie';
message.innerHTML = `
Hello there, this is a cookie
 <button class="btn btn--close-cookie">Got It!</button>
`;

//header.prepend(message); // it adds the element as the first child
//header.append(message); // it adds the element as the last child

// If we use different methods one after the other then it just overrides the previous one and only inserts once.
// In order to insert multiple copies, we can use cloneNode method
// header.before(message.cloneNode(true));

//header.before(message); // adds as a sibling before the target element
header.after(message); // add as a sibling after the target element

const closeBtn = document.querySelector('.btn--close-cookie');

closeBtn.addEventListener('click', () => {
   message.remove();
});

// styles, attributes and classes
message.style.backgroundColor = 'red';
// To get all the computed styles we can get the below method
console.log(getComputedStyle(message));

message.style.height =
   Number.parseFloat(getComputedStyle(message).height, 10) + 100 + 'px';

// To change the root styles
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.getAttribute('alt'));
logo.setAttribute('alt', 'Updated bankist Logo');

// Special attribute
console.log(logo.dataset.typeProp);

// classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
