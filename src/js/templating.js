import cardCountry from '../templates/card_country.hbs';
import country from '../templates/country.hbs';
import toastr from 'toastr'
import refs from './refs';

function createCard(data) {
  if (data.length >= 2 && data.length <= 10) {
    refs.menuRef.innerHTML = country(data);
  }
  if (data.length === 1) {
    refs.menuRef.innerHTML = cardCountry(data);
  }
  if (data.length > 10) {
    toastr.error('Not found!!!');
  }
}

export default createCard;
