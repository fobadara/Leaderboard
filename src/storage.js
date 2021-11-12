import { listenToEvent, callApi } from './use.js';

const gameId = 'vfo3jpl5RXpVbquV5PS0';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const getInputValues = () => {
  let user;
  let score;
  const input = document.querySelectorAll('input');
  input.forEach((currentItem) => {
    if (currentItem.name === 'name') {
      user = currentItem.value;
    } else {
      score = currentItem.value;
    }
  });
  return (score) ? JSON.stringify({ user, score }) : '';
};

const postScores = (api, listen, link, getInputValue) => {
  let result;
  listen('click', async (event) => {
    const scores = getInputValue();
    if (event) {
      const { action } = event.target.dataset;
      if (action === 'submit') {
        result = await api('POST', link, scores);
      }
    }
    return result;
  });
};
postScores(callApi, listenToEvent, url, getInputValues);

const getScores = async (api, link) => {
  const method = 'GET';
  const result = await api(method, link);
  return result;
};

getScores(callApi, url);

export {
  url, getScores,
};
