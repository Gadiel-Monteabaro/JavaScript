// Un estilo imperativo en la programacion es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea.

// Las sentencias cambian el estado del programa, como actualizar variables globales. (bucle for)

// En lugar de utilizar el bucle for, podemos utilziar el metodo "map", el cual, ayuda a evitar errores semanticos. (Off By One Errors)

// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function (tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function (index) {
  // Es importante utilizar el metodo correcto, reemplazamos splice por slice.
  const tabsBeforeIndex = this.tabs.slice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.slice(index + 1); // Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Tu casilla de correo, drive y otros sitios de trabajo

const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]); // Sitios sociales

const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
