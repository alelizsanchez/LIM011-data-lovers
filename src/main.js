/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import POTTER from './data/potter/potter.js' */
import LoL from './data/lol/lol.js'


const name = document.getElementById('name')


console.log(example);

/*
 * console.log(POKEMON);
 * console.log(POTTER);*/

console.log(LoL)
let lolData = Object.values(LoL.data);
//  const lolData = LoL.data;
 const $root = document.querySelector('#root');

const playing = (data) => {
    let almacenar = '';
    for (let i = 0; i < data.length; i++) {
    let item = `<div class="contenedor flex" >
      <img class="img__lol" src="${data[i].splash}"/>
      <p class ="name"> ${data[i].name}</p>
      </div>`;
        almacenar += item;
    }
    return almacenar;
};

$root.innerHTML = playing(lolData);
