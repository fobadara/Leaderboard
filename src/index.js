import './style.css';

/* class LeaderBoard {
  constructor() {
    this.memory = [];
    this.display();
  }

  add() {
    this.name = document.querySelector('input[type="text"]');
    this.score = document.querySelector('input[type="number"]');
    this.button = document.querySelector('form');
    this.button.addEventListener('submit', (event) => {
      this.number = this.memory.length + 1;
      this.person = { name: 'Abdulfatai', score: 100, number: this.number };
      this.memory.push(this.person);
      event.preventDefault();
    });
  }

  display() {
    this.root = document.querySelector('.root');
    this.fragment = new DocumentFragment();
    this.memory.forEach((currentItem, index) => {
      this.li = document.createElement('li');
      this.li.innerHTML = `
      <li id='${index + 1}'>${currentItem.name}: ${currentItem.score}</li>;
      `;
      this.fragment.append(this.li);
    });
    this.root.append(this.fragment);
  }
}

const leaderBoard = new LeaderBoard();
leaderBoard.add();  */