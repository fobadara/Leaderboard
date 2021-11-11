import './style.css';

import {
  listenToEvent, callApi, displayDownwards, display,
} from './use.js';

import {
  ulContainer, url, getInputValues, postScores, getScores,
} from './storage.js';

const root = document.querySelector('.root');

// const refresh = () => {

// };

const handleDisplay = async (container, apiScore, display, api, link) => {
  const scores = await apiScore(api, link);
  console.log(scores);
  display(scores, container);
};

const refreshAll = (container, apiScore, display, api, link) => {
  listenToEvent('click', (event) => {
    // console.log(event.target.tagName)
    if (event.target.tagName === 'BUTTON') {
      console.log('button')
      handleDisplay(container, apiScore, display, api, link);
    }
  });
};
refreshAll(root, getScores, displayDownwards, callApi, url);
