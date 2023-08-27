const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '70a77039a6c6b0218e9731d3e6e45266',
  },
};

function fetchSeasons() {
  return fetch('https://v3.football.api-sports.io/players/seasons', options)
    .then(res => res.json())
    .then(data => data.response)
    .catch(console.log);
}

export { fetchSeasons };
