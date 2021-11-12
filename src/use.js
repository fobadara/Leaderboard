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
  return output;
};

const display = (root, arrayIterator) => {
  root.innerHTML = '';
  const ul = document.createElement('ul');
  ul.tabIndex = 0;
  arrayIterator.forEach((currentItem, index) => {
    ul.innerHTML += `
    <li id="${index}" tabIndex = 0>${currentItem.user}: ${currentItem.score}</li>
  `;
  });
  return root.append(ul);
};

const displayDownwards = async (array, root) => {
  const json = await array.result;
  const sorted = json.sort((a, b) => b.score - a.score);
  return display(root, sorted);
};

export {
  listenToEvent, callApi, display, displayDownwards,
};