console.clear();
// Recordar de que en el html DOM_introducción.html linea 148, están las etiquetas que se van a usar para este cap y los comentarios que aplican para estas etiquetas que se usan para este ejercicio.

// Se va a crear la función holaMundo() que se va a usar en el botón número dos.

function holaMundo() {
  alert("Hola Mundo del botón #2");
  console.log(event);
}

function holaMundo3() {
  alert("Hola Mundo del botón #3");
  console.log(event);
}

// Se genera una variable que obtenga el acceso a el Id de el botón 3 id= "evento-semantico"

const $eventoSemantico = document.getElementById("evento-semantico");

// De la siguiente forma es como se hace funcionar la function por medio del getElementById que apunta al botón #3 para que funcione:
//Entonces su estructura es $variable.acción(propiedad) = function (La función debe estar escrita antes de este paso).
$eventoSemantico.onclick = holaMundo3; //Importante que al poner la función se valide en consola si genera un undefined, si es así de que genere undefined es cuestión de quitarle los paréntesis (Tener presente la semantica de la función y la sintaxis de la misma).

//También se puede con una function anónima:
//La letra e sería para el parámetro event (Se puede abreviar así)
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo del boton Número #3 con manejador semántico de eventos");
  console.log(e); //Para ver el parámentro de la función que es el event.
  console.log(event); //También se puede ver así.
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PARA VARIAS FUNCIONES EN UN SOLO BOTÓN SE HACE ASÍ:

//Primero la variable para acceder desde el id

const $eventoMultiple = document.getElementById("evento-multiple");

//Función para usar.

function holaMundo4() {
  alert("Hola Mundo del botón #4");
  console.log(event);
}

//se usará el metodo .addEventListener() --- Este metodo puede recibir varios parámetros, pero por hoy se verán dos:
//.addEventListener("Primero el evento (click)", es la función que se va a ejecutar con la acción) la función debe estár definida antes.
$eventoMultiple.addEventListener("click", holaMundo4); //Nuevamente sin paréntesis la función.

//También se puede con una funcion anónima o con un arrow function.

$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo desde el botón #4 con el manejador de eventos Múltiples");
  console.log(e); //Para ver el evento en consola
  console.log(event); //x2
  console.log(e.target); // Aquí muestra en consola la etiqueta que es la que ejecuta la funcion
  console.log(e.type); // Este muestra la acción en la consola, que aquí sería click.
});

// Tener presente de que para el botón #4 se mostrará dos ventanas emergenter ya que tiene dos funciones enlazadas al id y porque se usa el .addEventListener()
//Siguiente cap es el 73