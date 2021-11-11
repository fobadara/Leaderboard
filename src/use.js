const listenToEvent = (event, handler) => {
  const body = document.querySelector('body');
  body.addEventListener(event, handler);
};

const callApi = async (method, url, body) => {
  const resolve = await fetch(url, {
    method,
    body,
    headers: {
      'Content-type': 'application/json',
    },
  });
  const output = await resolve.json();
  // console.log(output);
  return output;
};

const display = (root, arrayIterator) => {
  root.innerHTML = '';
  const ul = document.createElement('ul');
  arrayIterator.forEach((currentItem, index) => {
    ul.innerHTML += `
    <li id="${index}">${currentItem.user}: ${currentItem.score}</li>
  `;
  });
};

const displayDownwards = async (array, root) => {
  const json = await array.result;
  console.log(json)
  const sorted = json.sort((a, b) => b.score - a.score);
  console.log(sorted);
  display(root, sorted);
};

export {
  listenToEvent, callApi, display, displayDownwards,
};