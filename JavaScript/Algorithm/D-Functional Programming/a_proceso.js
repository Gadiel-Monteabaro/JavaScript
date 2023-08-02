// Programacion Funcional -> IMPUT => PROCESS => OUTPUT

// Funciones Aisladas - Sin dependencia alguna del estado del programa.
// Funciones Puras - Una misma entrada, da siempre la misma salida.
// Funciones con efectos secundarios limitados - Cualquier cambio o mutacion en el estado del programa fuera de la funcion son cuidadosamente controlados.

const prepareTea = () => "greenTea";

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);
