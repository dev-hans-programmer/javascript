// Write an async function which executes callback after finishing it's async operation

async function processOperation(callback) {
   try {
      const res = await fetch('https://api.github.com/users/gaearon/repos');
      const data = await res.json();
      callback(data);
   } catch (err) {
      console.log('Error occurred', err);
   }
}

function getDataFromProcess(data) {
   console.log('Got data from callback', data);
}

processOperation(getDataFromProcess);
