import createCard from './templating';

function fetchCountries(event) {
  const baseURL = `https://restcountries.eu/rest/v2/name/${event.target.value}`;
  fetch(baseURL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      createCard(data);
    })
    .catch(error => console.log(error));
}

export default fetchCountries;