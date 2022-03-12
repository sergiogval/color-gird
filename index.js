const container = document.getElementById('container');
const colors = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#9b59b6', '#34495e', '#e67e22', '#1abc9c', '#2c3e50', '#95a5a6', '#ecf0f1', '#bdc3c7', '#7f8c8d'];

const SQUARES = 2016;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => RemoveColor(square));
  container.appendChild(square);
}

function setColor(square) {
  square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function RemoveColor(square) {
  square.style.backgroundColor = '#1d1d1d';
}