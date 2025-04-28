// Time optimization
function find(index) {
   let a = [];
   for (let i = 0; i < 1000000; i++) a[i] = i * i;

   console.log(a[index]);
}

// optimized
function findClosure() {
   let a = [];
   for (let i = 0; i < 1000000; i++) a[i] = i * i;
   return function (index) {
      console.log(a[index]);
   };
}

console.time('6');
find(6);
console.timeEnd('6');

console.time('50');
find(50);
console.timeEnd('50');

const closure = findClosure();
console.time('7');
closure(7);
console.timeEnd('7');

console.time('51');
closure(51);
console.timeEnd('51');

for (var i = 0; i < 3; i++) {
   function inner(i) {
      setTimeout(function log() {
         console.log('i', i);
      }, 1000);
   }
   inner(i);
}

for (var i = 0; i < 3; i++) {
   setTimeout(function log() {
      console.log('iu', i);
   }, 1000);
}

// Make this run only once
function likeVideo() {
   let called = false;

   return function () {
      if (!called) {
         console.log('Liked the video');
         called = true;
      }
   };
}

const like = likeVideo();

like();
like();
like();
like();
