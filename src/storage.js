const memory = [
  { name: 'Abdulfatai', score: 100 },
  { name: 'Raymond', score: 90 },
];

const root = document.querySelector('.root');
const creator = document.createElement.bind(document);

export {
  memory, root, creator,
};