function frankenSplice(arr1, arr2, n) {
  let a = arr2.slice(0, n) // a = array copia

  for (let i = 0; i < arr1.length; i++) { // a.push(...arr1)
    a.push(arr1[i]);
  }

  for (let j = n; j < arr2.length; j++) {
    a.push(arr2[j]);
  }

   return a;

}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));