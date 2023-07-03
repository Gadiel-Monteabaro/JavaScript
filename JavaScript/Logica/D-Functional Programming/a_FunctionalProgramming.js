// Programacion Funcional.
/*
  Funciones aisladas: incluye variables globales sujetas a cambios.

  Funciones Puras: Una misma entrada, siempre da la misma salida.

  Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados
*/

const prepareTea = () => "greenTea"; // retorna un string

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups; // retorna un array
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);