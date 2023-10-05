const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
let window = window.open('about:blank');
window.onload = function () {
let script = document.createElement('script');
document.body.appendChild(script);
script.innerText = 'js here';

 '}'