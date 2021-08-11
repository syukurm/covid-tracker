import { formatRelative } from 'date-fns';
import { id } from 'date-fns/locale';

class GlobalData extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  get lastUpdate() {
    return formatRelative(new Date(this._data.lastUpdate), new Date(), { locale: id });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (!this._data) {
      this.innerHTML = `
        <div class="bg-white shadow grid grid-cols-1 md:grid-cols-3 mt-8 mx-8 rounded-3xl md:rounded-full text-center">
          <div class="flex justify-center items-center text-lg my-8 col-span-full">
            <svg class="animate-spin h-12 w-12 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sedang memuat data
          </div>
        </div>
      `;
    } else {
      this.innerHTML = `
        <div class="bg-white shadow grid grid-cols-1 md:grid-cols-3 mt-8 mx-8 rounded-3xl md:rounded-full text-center">
          <div class="p-6 md:p-8 space-y-3 md:space-y-6">
            <h3 class="text-xl font-medium">Terkonfirmasi</h3>
            <div class="text-yellow-500 text-lg md:text-xl lg:text-3xl">${this._data.confirmed.toLocaleString()}</div>
          </div>
          <div class="p-6 md:p-8 space-y-3 md:space-y-6">
            <h3 class="text-xl font-medium">Sembuh</h3>
            <div class="text-green-500 text-lg md:text-xl lg:text-3xl">${this._data.recovered.toLocaleString()}</div>
          </div>
          <div class="p-6 md:p-8 space-y-3 md:space-y-6">
            <h3 class="text-xl font-medium">Meninggal dunia</h3>
            <div class="text-red-500 text-lg md:text-xl lg:text-3xl">${this._data.deaths.toLocaleString()}</div>
          </div>
        </div>
        <div class="text-center text-xs mt-1 text-gray-400">Terakhir diperbarui: ${this.lastUpdate}</div>
      `;
    }
  }
}

customElements.define('global-data', GlobalData);
