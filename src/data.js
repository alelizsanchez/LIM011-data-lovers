export const seeToChampion = (champion) => {
  const allChampions = champion.map((extract) => `
  <div class="cont-personajes flex" name="obtener"
  id="${extract.id}">
  <img src="${extract.img}" class="imagen-root"> 
  <p class="name__lol">${extract.name}</p>
</div>`);

 console.log(allChampions);
};
