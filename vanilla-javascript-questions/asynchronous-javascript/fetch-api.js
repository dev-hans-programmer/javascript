// Using then and catch
const url = 'https://api.github.com/users/gaearon/repos';
fetch(url)
   .then((res) => res.json())
   .then((data) => console.log('Fetched data', data))
   .catch((err) => console.log('Error in fetch', err));

// using async and await
async function fetchData() {
   try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('Async fetched data', data);
   } catch (err) {
      console.log('Error in async ', err);
   }
}

fetchData();
