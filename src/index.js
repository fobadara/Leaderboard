import './style.css';

class LeaderBoard {
  constructor() {
    this.memory = [
      { name: 'Abdulfatai', score: 100 },
      { name: 'Raymond', score: 90 },
    ];
    this.display();
  }

  display() {
    this.root = document.querySelector('.root');
    this.fragment = new DocumentFragment();
    this.memory.forEach((currentItem, index) => {
      this.ul = document.createElement('ul');
      this.ul.innerHTML = `
      <li id='${index + 1}'>${currentItem.name}: ${currentItem.score}</li>
      `;
      this.fragment.append(this.ul);
    });
    this.root.append(this.fragment);
  }
}

// eslint-disable-next-line no-unused-vars
const leaderBoard = new LeaderBoard();
