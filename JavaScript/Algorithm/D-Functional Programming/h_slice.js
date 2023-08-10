function sliceArray(anim, beginSlice, endSlice) {
  let newArray = anim.slice(beginSlice, endSlice);
  return newArray;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));

// Remover elementos utilizando el elemento slice
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]);
