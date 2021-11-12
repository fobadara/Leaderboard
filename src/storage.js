import { listenToEvent, callApi } from './use.js';

const gameId = 'vhzB1Yi0ThkTiPdCiOHz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
const ulContainer = document.createElement('ul');

const getInputValues = () => {
  let user;
  let score;
  const input = document.querySelectorAll('input');
  input.forEach((currentItem) => {
    if (currentItem.name === 'name') {
      user = currentItem.value;
    }
  });
  return (score) ? JSON.stringify({ user, score }) : '';
};

// const scores = getInputValues();

const postScores = (api, listen, link, getInputValue) => {
  listen('click', async (event) => {
    const scores = getInputValue();
    if (event) {
      const { action } = event.target.dataset;
      if (action === 'postScores') {
        const res = await api('POST', link, scores);
        console.log(res);
      }
    }
  });
};
postScores(callApi, listenToEvent, url, getInputValues);


// const handler = () => {
// postScores(callApi, listenToEvent, url, scores);
// }

// handler()

const getScores = async (api, link) => {
  const method = 'GET';
  const result = await api(method, link);
  // console.log(result);
  return result;
};

getScores(callApi, url);

export {
  ulContainer, url, getInputValues, postScores, getScores,
};

// const create = async () => {
//   await callApi('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//     method: 'POST',
//     body: JSON.stringify({ name: 'Fobadara\'s Cool Game' }),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   }).then((response) => response.json()).then((json) => console.log(json));
// };
// create();
