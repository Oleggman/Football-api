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
const render = new Render();
refs.loadBtn.style.display = 'none';

fetchCountries()
  .then(data => render.renderCountrySelect(data, refs.countrySelect))
  .catch(console.log);

refs.clearBtn.addEventListener('click', () => (refs.container.innerHTML = ''));
refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', () =>
  render.renderPlayers(players, refs.container)
);

function onSearch(evt) {
  refs.loadBtn.style.display = 'none';

  evt.preventDefault();
  refs.container.innerHTML = '';
  render.resetStart();

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
