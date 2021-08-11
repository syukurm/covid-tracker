import 'tailwindcss/tailwind.css';
import 'regenerator-runtime';
import './components/country-list';
import './components/country-card';
import './components/global-data';
import SmoothScroll from 'smooth-scroll';
import CovidRepository from './data/covid-repository';

// eslint-disable-next-line no-unused-vars
const scroll = new SmoothScroll('a[href*="#"]');

document.addEventListener('DOMContentLoaded', async () => {
  const countryList = document.querySelector('country-list');
  const globalData = document.querySelector('global-data');
  globalData.data = await CovidRepository.getLatestData();
  countryList.countries = await CovidRepository.getAllCountryData();
});
