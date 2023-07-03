// Don't Repeat Yourself
function Animal(name) {
    this.name = name
};

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

/*  Syntaxis - heredar propiedades y comportamiento.
    ChildObject.prototype = Object.create(ParentObject.prototype);
    ChildObject.prototype.methodName = function () { '...' };
*/

function Cat() { }

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

let kira = new Cat();

kira.eat();