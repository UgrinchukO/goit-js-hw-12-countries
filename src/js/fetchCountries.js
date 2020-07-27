import refs from './refs'

function fetchCountries(searchCountries) {
  fetch('https://restcountries.eu/rest/v2/name/${searchCountries}')
    .then(response => response.json())

    .then(data => {
      return data;
    })
    .catch(error => console.log(error));
}

export default fetchCountries;