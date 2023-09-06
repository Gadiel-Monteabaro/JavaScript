// Document Object Model

// Representacion de los objetos (elementos), que conforman la estructura de un documento en la web.

// Representar el documneto HTML a traves del DOM, nos permite acceder a sus elementos y manipularlos.

// El DOM, representa a los elementos como "nodos" y "objetos" con los cuales podemos trabajar en Javascript.

// Nodo: Un punto especifico del diagrama o arbol de nodos del DOM.
// Root Node (Nodo raiz)
// Parent Node (Nodo Padre)
// Child Node (Nodo hijo)
// Sibling Nodes (Nodos hermanos)

/* <-- Selectores --> */

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML;
// estructura HTML que esta contenida dentro de ese elemento. "inner" = "interno"

let titulo = document.getElementById("titulo");
titulo.innerText;
// accedemos al texto que se encuentra dentro de nuestro elemento. "inner" = "interno"
titulo.tagName;
// accedemos a la etiqueta de nuestro elemento. "tag" = "etiqueta"

let clases = document.getElementsByClassName("clase");
//  accedemos a todos los elementos, con la clase indicada. devuelve un array con los elementos.
clases[0];
// usamos el indice correspondiente del elemento al que queremos acceder.

let etiqueta = document.getElementsByTagName("etiqueta");
//  accedemos a todos los elementos, con la etiqueta indicada. devuelve un array con los elementos.

let querySelectorId = document.querySelector("#id");
let querySelectorClase = document.querySelector(".clase");
let querySelectorNoTenga = document.querySelector("ul li:not(.clase)");
// accedemos a los elementos con el selector css indicado. Pero solo tomara el primer elemento indicado con ese selector.

let querySelectorAllClase = document.querySelectorAll(".clase");
// accedemos a todos los elementos que contengas el selector css indicado. Recibimos una lista de nodos. Los cuales podemos acceder con sus indices respectivos.

/* <-- Personalizar --> */

let elemento = document.querySelector(".clase");
elemento.style.backgroundColor = "blue";
elemento.style.textTransform = "uppercaseF";
// asignamos estilo CSS con el metodo style.

let texto = document.getElementById("id");
texto.innerText; // accedemos al texto dentro del elemento indicado.
texto.textContent; // accedemos al texto dentro del elemento indicado.
texto.innerHTML; // accedemo al todo el HTML del elemento indicado.

let modificarTexto = document.getElementById("id");
titulo.innerText = "Nuevo texto";

/* <-- Atributos --> */

let modificarAtributo = document.getElementsByTagName("a");
modificarAtributo.getAttribute("href"); // accedemos al atributo indicado.
modificarAtributo.removeAttribute("href"); // eliminamos el atributo indicado.
modificarAtributo.setAttribute("href", "nuevo enlace"); // modificcamos el atributo seleccionado. el primer valor, es el atributo a modificar, el sugndo valor, es el nuevo valor del atributo.

/* <-- Clases --> */

let listaDeClases = document.querySelector("h1");
listaDeClases.classList; // lista de todas las clases de ese elemento.
listaDeClases.classList.add("nueva-clase"); // agregamos una clase a la lista de clases.
listaDeClases.classList.remove("eliminar-clase"); // eliminamos una clase a la lista de clases.

/* <-- Crear un Elemento --> */

let lista = document.getElementById("lista");
let nuevoElemento = document.createElement("li");
lista.append(nuevoElemento); // podemos agregar el elemento creado a nuestro documento HTML.
nuevoElemento.remove(); // eliminamos ese elemento creado.

/* <-- Eventos --> */

// "Algo" que ocurre en el sitio web como resultado de interaccion con el usuario o por otra causa como cambios en el estado del dispositivo o ventana.
// En HTML, tenemos atributos que hacen referencia a los eventos.
function accion() {
  console.log("click");
}
// <h1 onClick="accion()"></h1>
// con el atributo onClick, podemos asignarle eventos a nuestro elemento y ejecutarlos.

/* <-- addEventListener --> */

function evento(e) {
  // e = evento, muestra todas las propiedades del evento.
  console.log(e);
}

let evento = document.getElementsByTagName("button");
evento.addEventListener("click", evento); // escribimos la funcion sin parentesis.
