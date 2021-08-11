import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

class CovidRepository {
  static async getLatestData() {
    try {
      const { data } = await axios.get(baseUrl);
      return {
        confirmed: data.confirmed.value,
        recovered: data.recovered.value,
        deaths: data.deaths.value,
        lastUpdate: data.lastUpdate,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getCountryList() {
    try {
      const response = await axios.get(`${baseUrl}/countries`);
      return response.data.countries;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getAllCountryData() {
    try {
      const data = [];
      const countries = await CovidRepository.getCountryList();
      for (const country of countries) {
        try {
          const response = await axios.get(`${baseUrl}/countries/${country.iso3 || country.name}`);
          data.push({
            name: country.name,
            confirmed: response.data.confirmed.value,
            recovered: response.data.recovered.value,
            deaths: response.data.deaths.value,
          });
        } catch (error) {
          continue;
        }
      }
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default CovidRepository;
