import { fetchSeasons } from './js/football-services';

const refs = {
  seasonSelect: document.querySelector('.season-select'),
};

fetchSeasons().then(renderSeasonSelect);

function renderSeasonSelect(data) {
  const markup = data.map(
    season => `<option value="${season}">${season}</option>`
  );

  refs.seasonSelect.innerHTML = markup;
}
