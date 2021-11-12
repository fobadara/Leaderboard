import './style.css';

import {
  listenToEvent, callApi, displayDownwards,
} from './use.js';

import {
  url, getScores,
} from './storage.js';

const root = document.querySelector('.root');

const handleDisplay = async (container, apiScore, display, api, link) => {
  const scores = await apiScore(api, link);
  return display(scores, container);
};
handleDisplay(root, getScores, displayDownwards, callApi, url);

const refresh = (container, handleDisplay, apiScore, display, api, link) => {
  let callHandleDisplay;
  let emptyValue;
  listenToEvent('click', (event) => {
    const { action } = event.target.dataset;
    if (action === 'refresh') {
      callHandleDisplay = handleDisplay(container, apiScore, display, api, link);
    } else if (action === 'submit') {
      const input = document.querySelectorAll('input');
      input.forEach((currentItem) => {
        currentItem.value = '';
        emptyValue = currentItem.value;
      });
    }
  });
  return callHandleDisplay || emptyValue;
};
refresh(root, handleDisplay, getScores, displayDownwards, callApi, url);
