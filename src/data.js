/* Manejo de data */

// esta es una función de ejemplo
export const seeToChampion = (champion) => {
    // console.log(champion)
     let allChampions = "";
     champion.map(extract => {
     allChampions += `<div class="contenedor">
                     <img src="${extract.splash}" class="imagenRoot"> 
                     <p class="letra">${extract.name}</p>
                     <p class="letra">${extract.info.attack}
                     ${extract.info.defense}
                     ${extract.info.magic}
                     ${extract.info.difficulty}</p>
                     </div>
                     `});
    
   console.log(allChampions);
   }
