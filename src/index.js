import debounce from 'lodash.debounce';
import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';

refs.inpRef.addEventListener('input', debounce(fetchCountries, 500));