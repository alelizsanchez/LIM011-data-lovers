/**
 * import POKEMON from './data/pokemon/pokemon.js'
 import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import LoL from './data/lol/lol.js'
import { seeToChampion } from './data.js';
let lolData = Object.values(LoL.data)

document.querySelector('#root').innerHTML = seeToChampion(lolData)

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
