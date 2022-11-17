//Reccorrido del DOM
//Volvemos la clase .cards del html en una variable DOM:

const $cards = document.querySelector(".cards");

console.log($cards); //Esto es para llamar a consola todas las cards (En este caso sería todo lo que está dentro de la section)

console.log($cards.children); //Aqui muestra un HTMLCollection de todos los cards

//Para acceder a un hijo en especifico se puede hacer la anotación de los arreglos (Para los puestos de cada hijo(Como se hace en el tema de las coordenadas))
console.log($cards.children[2]); //Aquí sería la card #3 (Que está en la posición dos (Ya que inicia desde cero el posicionamiento))(card people)

console.log($cards.parentElement); //Es para mostrar el elemento padre (En este caso sería el body).

console.log($cards.parentNode); //Este muestra cual es el nodo padre (Que también muestra el body ya que no hay más, antes de ello!!).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//También se puede obtener el primer y último elemento.
console.log($cards.firstChild); //mostrará #TEXT ya que es su primer hijo-nodo (Nodo de salto de línea (Es decír un enter o salto de línea)).
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ahora, para detectar cual es el primer elemento HTML (En este caso dentro del section), sería así:

console.log($cards.firstElementChild); //Aquí si mostrara un elemento HTML, que para este caso mostrará el elemento <figure class="card"> y sería el de tech.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log($cards.lastChild); //De igual forma mostrará un #TEXT ya que es su último hijo-nodo

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log($cards.lastElementChild); //Este mostrará su último elemento hijo, que en este caso es la card Nature.

//
//
//
//
//
//
//
//También se puede ver el hermano anterior y el hermano después (Es decir, lo que está antes y después del section) hablando para este caso.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//También se puede ver el hermano anterior y el hermano después (Es decir, lo que está antes y después del section) hablando para este caso.
console.log($cards.previousSibling); //Este sería para el anterior pero mostraría #TEXT ya que muestra es a nivel general.

console.log($cards.nextSibling); //Muestra lo de adelante de la section.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//También se puede ver el hermano anterior y el hermano después (Es decir, lo que está antes y después del section) hablando para este caso.

console.log($cards.previousElementSibling); //Este muestra el elemento HTML anterior, para este caso mostrará el elemento de enlace a.

console.log($cards.nextElementSibling); //Este muestra el elemento siguiente HTML, es decir, para este caso muestra un <br/>

//
//
//Ahora, también está el metodo closest: Este metodo es más como para validar con boolean --  si lo que se busca está cerca del elemento html. --- eso si, si es ancestro.

console.log($cards.closest("div")); //Aquí me da null --  ya que ni arriba ni abajo hay un div.

console.log($cards.closest("body")); //Aquí si mostrará un <body>