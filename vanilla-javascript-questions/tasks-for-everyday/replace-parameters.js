// Write a function to replace a parameter in an url
function replaceParamsInUrl(url, params = []) {
   let newUrl = url;
   params.forEach(({ from, to }) => {
      newUrl = newUrl.replace(`:${from}`, to);
   });
   return newUrl;
}

const url = '/posts/:postId/comments/:commentId';
const resultingUrl = replaceParamsInUrl(url, [
   { from: 'postId', to: '1' },
   { from: 'commentId', to: '2' },
]);
// console.log(resultingUrl);
