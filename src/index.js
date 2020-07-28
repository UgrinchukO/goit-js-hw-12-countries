// import debounce from 'lodash.debounce';
import './styles.css';
import '../node_modules/toastr/build/toastr.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';

const debounce = require('lodash.debounce');

refs.inpRef.addEventListener('input', debounce(fetchCountries, 500));
