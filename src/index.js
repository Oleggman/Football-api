import { fetchPlayers, fetchCountries } from './js/football-services';
import Render from './js/render';

const refs = {
  form: document.querySelector('.form'),
  countrySelect: document.querySelector('.country-select'),
  //   teamSelect: document.querySelector('.team-select'),
  container: document.querySelector('.container'),
  loadBtn: document.querySelector('.load-more-btn'),
  clearBtn: document.querySelector('.clear-btn'),
};

let players = [];
let currentPLayer = '';
const render = new Render();
refs.loadBtn.style.display = 'none';

fetchCountries()
  .then(data => render.renderCountrySelect(data, refs.countrySelect))
  .catch(console.log);

refs.clearBtn.addEventListener('click', onClear);
refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoad);

function onSearch(evt) {
  evt.preventDefault();
  if (evt.target.elements.player.value === currentPLayer) {
    return;
  }
  refs.loadBtn.style.display = 'none';

  refs.container.innerHTML = '';
  render.resetStart();
  currentPLayer = evt.target.elements.player.value;

  fetchPlayers(evt.target.elements.player.value)
    .then(data => {
      players = data;
      render.renderPlayers(data, refs.container);

      if (data.length > 20) {
        refs.loadBtn.style.display = 'block';
      }
    })
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
