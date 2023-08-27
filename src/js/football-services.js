import Notiflix from 'notiflix';

const API_TOKEN =
  'VOCUtygJttj4dIxWCDsmyRPfHXVf18fMDjAdzYMNGWS4pSkjBebr4oh8L60Q';

function fetchPlayers(player) {
  return fetch(
    `https://soccer.sportmonks.com/api/v2.0/players/search/${player}?api_token=${API_TOKEN}`
  )
    .then(r => r.json())
    .then(obj => {
      if (!obj.data.length) {
        throw new Error(`Player ${player} was not found.`);
      }
      return obj.data;
    })
    .catch(error => Notiflix.Notify.failure(error.message));
}

function fetchCountries() {
  return fetch(
    `https://soccer.sportmonks.com/api/v2.0/countries?api_token=${API_TOKEN}`
  )
    .then(r => r.json())
    .then(obj => obj.data)
    .catch(error => Notiflix.Notify.failure(error.message));
}

function fetchTeams() {}

export { fetchPlayers, fetchCountries };
