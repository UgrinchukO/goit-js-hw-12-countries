import cardCountry from '../template/card_country';
import country from '../template/country';

import refs from './refs';

const createCard = data => {
  if (data.length >= 2 && data.length <= 10) {
    refs.menuRef.innerHTML = country(data);
  }
  if (data.length === 1) {
    refs.menuRef.innerHTML = cardCountry(data);
  }
  if (data.length > 10) {
    error('Not found!!!');
  }
};

export default createCard;
