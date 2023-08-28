import { fetchPlayers, fetchCountries } from './js/football-services';
import Render from './js/render';
import { refs } from './js/refs';

let players = [];
let currentPLayer = '';
const render = new Render();
refs.loadBtn.style.display = 'none';

refs.clearBtn.addEventListener('click', onClear);
refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoad);

function onSearch(evt) {
  evt.preventDefault();
  if (evt.target.elements.player.value === currentPLayer) {
    return;
  }
  refs.loadBtn.style.display = 'none';
  refs.loader.classList.remove('hidden');

  refs.container.innerHTML = '';
  render.resetStart();
  currentPLayer = evt.target.elements.player.value;

  fetchPlayers(evt.target.elements.player.value)
    .then(onFetchPlayers)
    .catch(console.log);
}

function onLoad() {
  const playersOnScrQnt = render.renderPlayers(players, refs.container);
  if (playersOnScrQnt + 20 > players.length) {
    refs.loadBtn.style.display = 'none';
  }
}

function onClear() {
  refs.container.innerHTML = '';
  refs.loadBtn.style.display = 'none';
  currentPLayer = '';
}

function onFetchPlayers(data) {
  players = data;
  refs.loader.classList.add('hidden');

  render.renderPlayers(data, refs.container);

  if (data.length > 20) {
    refs.loadBtn.style.display = 'block';
  }
}
