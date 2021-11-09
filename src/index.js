import './style.css';

import {
  memory, root, creator,
} from './storage.js';

class LeaderBoard {
  display = (memory, root, creator) => {
    const ul = creator('ul');
    memory.forEach((currentItem, index) => {
      ul.innerHTML += `
      <li id='${index + 1}'>${currentItem.name}: ${currentItem.score}</li>
      `;
    });
    root.append(ul);
  }
}

const leaderBoard = new LeaderBoard();
leaderBoard.display(memory, root, creator);
