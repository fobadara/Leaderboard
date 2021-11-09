import './style.css';

import {
  memory, root, ul,
} from './storage.js';

class LeaderBoard {
  display = (memory, root, ul) => {
    memory.forEach((currentItem, index) => {
      ul.innerHTML += `
      <li id='${index + 1}'>${currentItem.name}: ${currentItem.score}</li>
      `;
    });
    root.append(ul);
  }
}

const leaderBoard = new LeaderBoard();
leaderBoard.display(memory, root, ul);
