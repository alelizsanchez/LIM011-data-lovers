import LoL from './data/lol/lol.js';
// eslint-disable-next-line import/named
import { mostrarCampiones } from './data';

const lolData = Object.values(LoL.data);
document.querySelector('#root').innerHTML = mostrarCampiones(lolData);
