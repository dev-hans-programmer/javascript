// Implement a click on todo item as fast as possible.

// Naive solution
const list = document.querySelectorAll('.item');
list.forEach((item) => {
   item.addEventListener('click', (e) => {
      console.log('Item clicked ', item.innerHTML);
   });
});

// Better approach- event delegation
const parent = document.querySelector('.todo-app');
parent.addEventListener('click', (e) => {
   if (e.target && e.target.classList.contains('item')) {
      console.log('ITEM clicked ', e.target.innerText);
   }
});
