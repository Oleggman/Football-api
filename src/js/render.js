export default class Render {
  constructor() {
    this.start = 0;
  }

  renderPlayers(data, selector) {
    const end = this.start + 20;
    const page_arr = data.slice(this.start, end);
    const markup = page_arr
      .map(
        item => `
          <div class="player-card">
              <div class="img-thumb">
                <img class="player-img"
                  src="${item.image_path}" alt="${item.display_name}" />
              </div>
              <div class="card-desc">
                <h2 class="player-name">${item.display_name}</h2>
                <p class="player-country">
                    Nationality: ${item.nationality || 'No info'}</p>
                <p class="player-birthdate">
                    Birthdate: ${item.birthdate || 'No info'}</p>
                <p class="player-height">Height: ${item.height || 'No info'}</p>
                <p class="player-weight">Weight: ${item.weight || 'No info'}</p>
              </div>
          </div>`
      )
      .join('');

    selector.insertAdjacentHTML('beforeend', markup);
    this.start += 20;
    return this.start;
  }

  //   renderCountrySelect(data, selector) {
  //     const markup = data.map(
  //       ({ name }) => `
  //         <option value="${name}">${name}</option>
  //     `
  //     );

  //     selector.insertAdjacentHTML('beforeend', markup);
  //   }

  resetStart() {
    this.start = 0;
  }
}
