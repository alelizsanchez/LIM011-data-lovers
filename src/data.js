/* Manejo de data */

// esta es una función de ejemplo

// export const example = () => {
//   return 'example';
// };
export const mostrarCampiones = (data) => {
  // eslint-disable-next-line no-console
  console.log(data);
  let almacenar = '';
  // eslint-disable-next-line array-callback-return
  data.map((extraer) => {
    almacenar += `
    ${extraer.splash}
    ${extraer.name}
    `;
  });
  // eslint-disable-next-line no-console
  return console.log(almacenar);
};

// export default mostrarCampiones;
