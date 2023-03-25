const body = document.querySelector('#table-body');

async function fetchData(url) {
  const resp = await fetch(url);
  const {
    data: { modules },
  } = await resp.json();
  return modules;
}

async function injectBody(url) {
  try {
    const modules = await fetchData(url);

    // for (let module of modules) {
    //   let tr = '';
    //   tr += `<tr>
    //     <td>${module.id}</td>
    //     <td>${module.module_name}</td>
    //     <td>${module.module_code}</td>
    // <tr/>`;

    //   body.innerHTML += tr;
    // }

    for (const module of modules) {
      const trElement = document.createElement('tr');

      for (const cell in module) {
        const tdEle = document.createElement('td');

        tdEle.textContent = module[cell];

        trElement.appendChild(tdEle);
      }
      body.appendChild(trElement);
    }
  } catch (err) {
    console.log(err);
  }
}

injectBody('http://34.220.156.80:5003/api/asset/modules/all');
