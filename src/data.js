/* Manejo de data */

// esta es una función de ejemplo

// export const example = () => {
//   return 'example';
// };
export const mostrarCampiones = (data) => {
  console.log(data);
  let almacenar = '';
  // eslint-disable-next-line array-callback-return
  data.map((extraer) => {
    almacenar += `
    ${extraer.splash}
    ${extraer.name}
    `;
  });
  return console.log(almacenar);
};

// export default mostrarCampiones;
