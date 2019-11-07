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
    <div class="lol__container">
      <div class="lol__picture">
        <div class="lol__mp">MP<span>${lolData[newArray].stats.mp}</span></div>
        <img  class="lol__png" src="${lolData[newArray].splash}"/>
        <div class="lol__exp-bar"></div>
      </div>
      <div class="lol__info">
       <div class="lol__name">${lolData[newArray].name}<p class="size-medium">${lolData[newArray].stats.hpperlevel}</p></div>
        <div class="lol__data">
         <div class="info__tags">${lolData[newArray].tags}<p class="text--small">Tipo</p></div>
         <div class="info__defense">${lolData[newArray].stats.hpperlevel}<p class="text--small">Nivel de vida</p></div>
         <div class="info__magic">${lolData[newArray].info.magic}<p class="text--small">Ataque</p></div>
        </div>
       <div class="pkmn___status">
          <div class="status__stardust">armadura<p class="nomtop">${lolData[newArray].stats.armor}</p></div>
          <div class="status__lol"><p class="nomtop"></p></div>
        </div>
        <div class="lol__powerup">
	       <div class="powerup__text">DAR MÁS</div>
	       <div class="powerup__stardust">2720</div>
	       <div class="powerup__candy">4</div>
        </div>
        <div class="lol__move space">
					<div>title<p class="move--mtop">${lolData[newArray].title}</p></div>
					<div>40</div>
        </div>
        <div class="lol__move">
					<div class=" move__special">blurb<p class="move--mtop">${lolData[newArray].blurb}</p></div>
					<div class=""></div>
        </div>
       </div>
     </div>
  </div>`;
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
