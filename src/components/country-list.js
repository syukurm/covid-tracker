class CountryList extends HTMLElement {
  set countries(countries) {
    this._countries = countries;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (!this._countries) {
      this.innerHTML = `
        <div class="flex justify-center items-center text-lg my-8 col-span-full">
          <svg class="animate-spin h-12 w-12 text-gray-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sedang memuat data
        </div>
      `;
    } else {
      this._countries.forEach((country) => {
        const countryCardElement = document.createElement('country-card');
        countryCardElement.country = country;
        this.appendChild(countryCardElement);
      });
    }
  }
}

customElements.define('country-list', CountryList);
