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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
   const s1coords = section1.getBoundingClientRect();
   console.log(s1coords);
   console.log(e.target.getBoundingClientRect());

   // current scroll
   console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

   console.log(
      'Height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
   );

   // scroll programmatically
   // window.scrollTo(
   //    s1coords.left + window.scrollX,
   //    s1coords.top + window.scrollY
   // );

   // window.scroll({
   //    left: s1coords.left + window.scrollX,
   //    top: s1coords.top + window.scrollY,
   //    behavior: 'smooth',
   // });

   section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
   console.group('HEy');
   alert('You are showing the alert after mouse enter');
};

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//    h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = alertH1;

// event capturing and bubbling
document.querySelector('.nav__link').addEventListener('click', (e) => {
   console.log('CLICKED', e.target);
   // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener(
   'click',
   (e) => {
      console.log('CONTAINER CLICKED', e.target);
   },
   true // enabling capturing phase
);

// DOM traversing
const h1Element = document.querySelector('h1');

// Going downwards: child
console.log(h1Element.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'red';

// Going upwards: parents
console.log(h1.parentElement);
console.log(h1.parentNode);

h1.closest('heading'); // it is opposite of querySelector

// Going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// // Tab component
// const parent = document.querySelector('.operations');

// function removeActiveClasses() {
//    document.querySelectorAll('.operations__tab').forEach((e) => {
//       e.classList.remove('operations__tab--active');
//    });

//    document.querySelectorAll('.operations__content').forEach((e) => {
//       e.classList.remove('operations__content--active');
//    });
// }

// function showContent(id) {
//    document.querySelectorAll('.operations__content').forEach((e) => {
//       if (Array.from(e.classList).join('').endsWith(id)) {
//          e.classList.add('operations__content--active');
//       }
//    });
// }

// parent.addEventListener('click', function (e) {
//    if (e.target.classList.contains('operations__tab')) {
//       // Hide other active classes
//       removeActiveClasses();
//       // inject the active class
//       const dataId = e.target.getAttribute('data-tab');
//       e.target.classList.add('operations__tab--active');
//       showContent(dataId);
//    }
// });

// Tab component
const parent = document.querySelector('.operations');
const tabs = document.querySelectorAll('.operations__tab');
const contents = document.querySelectorAll('.operations__content');

function removeActiveClasses() {
   tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
   contents.forEach((content) =>
      content.classList.remove('operations__content--active')
   );
}

function showContent(id) {
   document
      .querySelector(`.operations__content--${id}`)
      .classList.add('operations__content--active');
}

parent.addEventListener('click', function (e) {
   const clickedTab = e.target.closest('.operations__tab');
   if (clickedTab) {
      // Hide other active classes
      removeActiveClasses();

      // Activate the clicked tab and corresponding content
      const dataId = clickedTab.getAttribute('data-tab');
      clickedTab.classList.add('operations__tab--active');
      showContent(dataId);
   }
});

// Hover effect
const nav = document.querySelector('.nav');

function manipulateOpacity(hide = true, e) {
   const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');

   siblings.forEach((el) => {
      if (hide) {
         if (el !== e.target) {
            el.style.opacity = 0.5;
         }
      } else {
         el.style.opacity = 1;
      }
   });
}

nav.addEventListener('mouseover', function (e) {
   if (e.target.classList.contains('nav__link')) {
      manipulateOpacity(true, e);
   }
});

nav.addEventListener('mouseout', function (e) {
   manipulateOpacity(false, e);
});

// Sticky Navigation
const initialCords = section1.getBoundingClientRect();

// performance wise it is not good
// window.addEventListener('scroll', function () {
//    if (this.window.scrollY > initialCords.top) nav.classList.add('sticky');
//    else nav.classList.remove('sticky');
// });

// Better approach: Intersection Observer
// const observerCallback = function (entries, observer) {
//    console.log(entries);
// };
// const observerOptions = {
//    root: null, // if null then it refers the view port
//    threshold: [0, 0.2], // target element visible and invisible from the view port then it will fire the callback
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

// // Sticky navigation - better approach
// const stickyNav = function (entries) {
//    const [entry] = entries;

//    if (!entry.isIntersecting) nav.classList.add('sticky');
//    else nav.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//    root: null,
//    threshold: 0,
// });
// headerObserver.observe(header);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
   const [entry] = entries;
   const { isIntersecting } = entry;

   nav.classList.toggle('sticky', !isIntersecting);
};

const options = {
   root: null,
   threshold: 0,
   rootMargin: `-${navHeight}px`, // creating a margin around the target element
};

const headerObserver = new IntersectionObserver(stickyNav, options);
headerObserver.observe(header);

// Revealing elements while scrolling
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
   // entries.forEach((entry) => {
   //    if (entry.isIntersecting) {
   //       entry.target.classList.remove('section--hidden');
   //    } else {
   //       entry.target.classList.add('section--hidden');
   //    }
   // });
   const [entry] = entries;
   if (!entry.isIntersecting) return;
   entry.target.classList.remove('section--hidden');
   observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
   root: null,
   threshold: 0.15,
});

allSections.forEach((section) => {
   sectionObserver.observe(section);
   section.classList.add('section--hidden');
});

// lazy loading
const allImages = document.querySelectorAll('img[data-src]');

const revealImage = function (entries, observer) {
   const [entry] = entries;

   if (!entry.isIntersecting) return;

   // const dataSrc = entry.target.getAttribute('data-src');
   entry.target.src = entry.target.dataset.src;
   // entry.target.classList.remove('lazy-img'); // we shouldn't do this as the image might take time to load
   entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
   });
   observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(revealImage, {
   root: null,
   threshold: 0,
   rootMargin: '-200px',
});
allImages.forEach((img) => {
   imgObserver.observe(img);
});
