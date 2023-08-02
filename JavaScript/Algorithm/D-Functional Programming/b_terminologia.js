// CallBacks -> son las funciones que se pasan a otra funcion para decidir la invocacion de esa funcion.

// Funciones de primera clase -> Las funciones pueden ser asignadas a una variable, pasadas a otra funcion o devueltas desde otra funcion como cualquier otro valor normal. En JavaScript todas las funciones son de primera clase.

// Funciones Higher Order -> Las funciones que toman una función como argumento, o devuelven una función como valor de retorno.

function filter(array, test) {
  let passed = [];
  for (var element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }

  return passed;
}

let r = filter([12, 8, 15, 25, 3], function (number) {
  return number > 10;
});

console.log(r);
