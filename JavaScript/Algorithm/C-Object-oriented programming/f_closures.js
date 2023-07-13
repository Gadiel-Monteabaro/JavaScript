// Utilizamos closures para evitar que las propiedades publicas no se puedan modificar desde afuera.

// nos referimos a propiedad publica a las propiedades que pueden ser modificadas por fuera de su instancia.

function Cat() {
    let weight = 20;
    this.getWeight = function () {
        return weight;
    }
}

let kira = new Cat();

console.log(kira.getWeight());