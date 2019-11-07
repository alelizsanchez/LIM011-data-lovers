import LoL from './data/lol/lol.js';
import { seeToChampion } from './data.js';

const lolData = Object.values(LoL.data);
console.log(lolData);
const root = document.querySelector('#root');
root.innerHTML = seeToChampion(lolData);
const informacionModal = document.querySelector('#informacion-lol');
const miModal = document.querySelector('#mi-modal');
const close = document.querySelector('#close');

// MODAL
root.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  const eventIdChampion = event.target.parentElement.id;
  const newArray = lolData.map((obj) => obj.id).indexOf(eventIdChampion);
  // eslint-disable-next-line no-restricted-globals
  if (event.target.parentElement.getAttribute('name') === 'obtener') {
    // mostrar modal
    miModal.classList.remove('hide');
    // caracteristicas en el modal
    informacionModal.innerHTML = `
     
     <div class="contenido__modal flex">

     <div class="lol__picture">
     <img  class="modal__img" src="${lolData[newArray].splash}"/>
     </div>

     <div class="lol__exp-bar"></div>
  
     <p class="titulo__lol">${lolData[newArray].title}</p> 
     <p class="descripcion__lol">${lolData[newArray].blurb}</p>
     </div>
    <div class="lol__info">
     <div class="lol__name">${lolData[newArray].name}<p class="size-medium"></p></div>
     <div class="pkmn__data"></div>
      <div class="info__tags">${lolData[newArray].tags}<p class="text--small">Tipo</p></div>
      <div class="info__defense"><p>Defensa:${lolData[newArray].info.defense}</p></div>
      <div class="info__magic"><p>Magia:${lolData[newArray].info.magic}</p></div>
    
    </div>
    </div>
    `;
  }
});

close.addEventListener('click', () => {
  miModal.classList.add('hide');
});

const encontrados = [];
Object.keys(LoL.data).forEach((champion) => {
  const tags = LoL.data[champion].tags;
  console.log(tags);
  tags.forEach((tagInformation) => {
    console.log(tagInformation);
    if (tagInformation === 'Tank') {
      encontrados.push(LoL.data[champion]);
      // console.log(encontrados);
    }
  });
});
