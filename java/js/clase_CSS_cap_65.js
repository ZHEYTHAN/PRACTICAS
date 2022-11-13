// Este es para manipulación de clases en hoja de estilos.

//Aquí volvimos la clase .card en una variable del DOM
const $card = document.querySelector(".card");

console.log($card); //Aquí me devolverá <figure class="card"> </figure>
console.log($card.className); //Aquí devolverá  card
console.log($card.classList); // Aquí devolverá un DOMTokenList [´card´, value: ´card´]

//Este contiene un contains que devolverá un resultado boolean, esto es para saber si un elemento tiene una clase en particular o especifica: Es decir:
console.log($card.classList.contains("rotate-45")); //Aquí es como preguntar si existe la clase rotate-45 ------  Como resultado dará un false ya que en el momento no está activo esta clase en ningún elemento.

//Aquí vamos a agregar la clase "rotate-45" dentro del elemento $card

$card.classList.add("rotate-45"); //Con la propiedad add se agrega.

console.log($card.classList.contains("rotate-45")); //Aquí ya nos dará true ya que en la línea anterior fue agregada!

console.log($card.className); //Aquí ya devolverá .card y adicional devolverá .rotate-45
console.log($card.classList); // Aquí devolverá un DOMTokenList(2) [´card´, ´rotate-45´, value: ´card rotate-45´]

//Tmbién como se puede agregar también se puede quitar/remover, y se realiza de la siguiente forma:

$card.classList.remove("rotate-45"); //Y ya con este quedaría removido.

console.log($card.classList.contains("rotate-45x")); //Aquí ya dará false fue en la línea anterior fue removido esta clase ".rotate-45"

/*
Ahora bien, también hay una propiedad que funciona como un interruptor, en donde identifica, si esta clase no está entonces la agrega, si está clase ya está entonces la elimina.

Esta propiedad es la propiedad toggle:
*/

// Anteriormente la clase ".rotate-45" fue eliminado, lo que quiere decir que con toggle debe queda activo

$card.classList.toggle("rotate-45"); // Aquí ya se usa el toggle.

//Para validar si quedo activo, se usará el contains para ver, si quedo agregado debe dar un true!!

console.log($card.classList.contains("rotate-45"));

//Nuevamente quitaremos la clase ".rotate-45" con toggle:
$card.classList.toggle("rotate-45");

//Y validaremos nuevamente con contains y deberá dar false!!

console.log($card.classList.contains("rotate-45"));

/*
También como se puede agregar y quitar, también se puede remplazar ---- vamos a agregar con toggle la clase de rotate-45 y la vamos a reemplazar por la otra clase que es rotate-135
*/

$card.classList.toggle("rotate-45"); //Aquí ya fue agregado.

//Y ahora lo reemplazaremos:

$card.classList.replace("rotate-45", "rotate-135"); //El primer parámetro dentro del paréntesis ya existe y el segundo es po el cual se va a reemplazar.

/*
Ahora bien, también se puede agregar de varias clases al tiempo:
*/

$card.classList.add("opacity-80", "sepia"); // Solo es separarlas por comas.

/*
Funciona de la misma forma con remove:
*/

$card.classList.remove("opacity-80", "sepia");

//Funciona de la misma forma con toggle:

$card.classList.toggle("opacity-80", "sepia");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
