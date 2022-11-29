//Capitulo #75 stopPropagation & preventDefault.

console.clear();

const $divsEventos2 = document.querySelectorAll(`.event-flujo div`); //Se relaciona esta variable y sus div con la section #2 para este cap.

//Se agrega una segunda variable que será solo para el link:

const $linkEventos = document.querySelector(`.event-flujo a`);

//Este function es para que que cuando se use el forEach, se sepa de donde se genera el click en la section.
function flujoEvent2(e) {
  console.log(
    `Hola te saluda ${this.className} de la segunda section, el click lo originó ${e.target.className}`
  );
  //Esto evita que se propague y que solo se muestre el evento en donde se da click, más no muestra las demás div, (En este ejemplo).
  //Se debe poner la e, ya que este es el evento y el que lo ejecuta.
  e.stopPropagation(); //Este va es dentro de la function, como aquí, ya que aquí es donde está el evento.
}

console.log($divsEventos2); //Es para ver el nodo de la section con lo que hay dentro.

//Uso del forEach para el uso del EvenListener.

$divsEventos2.forEach((div) => {
  //Fase en burbuja
  div.addEventListener(`click`, flujoEvent2); //Flujo de adentro hacia afuera
});

//Aquí se genera evento para que al dar click en el enlace, se ejecute una ventana de alerta primero
$linkEventos.addEventListener(`click`, (e) => {
  alert(`Hola, te estás re-direccionando a la página oficial de JonMircha`); //Esto primero ejecuta el mensaje de alerta y ahí si redirecciona.
  //Se pondrá la propiedad preventDefault, recordar también poner la e ya que es el evento y es el que la ejecuta.
  e.preventDefault(); //Esto lo que hace es que se ejecute la ventana de alerta con el mensaje, pero no se redireccione a la página del enlace..
  e.stopPropagation();
});

//Finalización de capitulo #75 y Falta el Último del DOM.
