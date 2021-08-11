class CountryCard extends HTMLElement {
  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="bg-white shadow rounded p-4 md:p-6 space-y-2">
        <h3 class="font-bold text-lg">${this._country.name}</h3>
        <div class="grid grid-cols-3 text-center">
          <div class="space-y-2">
            <h3 class="font-medium text-sm md:text-base">Terkonfirmasi</h3>
            <div class="text-yellow-500 text-sm md:text-base">${this._country.confirmed.toLocaleString()}</div>
          </div>
          <div class="space-y-2">
            <h3 class="font-medium text-sm md:text-base">Sembuh</h3>
            <div class="text-green-500 text-sm md:text-base">${this._country.recovered.toLocaleString()}</div>
          </div>
          <div class="space-y-2">
            <h3 class="font-medium text-sm md:text-base">Meninggal</h3>
            <div class="text-red-500 text-sm md:text-base">${this._country.deaths.toLocaleString()}</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('country-card', CountryCard);
