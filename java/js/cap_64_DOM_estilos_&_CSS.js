////////////////////
/*
CAPITULO 64:
            DOM: Estilos y Variables CSS.
 */

//La variable se cambia de $linkDOM a $linkDOM2 ya que en la consola me está generando error por repetición en el nombre.

const $linkDOM2 = document.querySelector(".link-dom");

console.log($linkDOM2.style); //Es más común este.
console.log($linkDOM2.getAttribute("style")); //Este no es tan común y mostratá esto: background-color: #f7df1e; color:#222;

console.log($linkDOM2.style.backgroundColor); //Este va a mirar de manera especifica el backgroundColor (Y lo que hay dentro)

console.log($linkDOM2.style.color); //Este lo mismo pero dentro de la propiedad color

//

console.log(window.getComputedStyle($linkDOM2)); //Este va a mostrar una:  CSSStyleDeclaration: {}  más completa, mostrará toda la información completa, todas la propiedades que pueden llegar a ir y demás, es decír que es completo todo lo que se muestra.

////
////
////  Ahora aquí se accedera a una propiedad en especifico o en particular con getComputedStyle: se puede hacer de la siguiente manera:
//Recordar que como este, en este caso es un elemento que cuelga del window, no se necesita escribir window.getComputedStyle sino que se puede escribir: getComputedStyle(variable).getPropertyValue("Propiedad a la que se va a acceder")
console.log(getComputedStyle($linkDOM2).getPropertyValue("color")); //En este caso, esto sería lo que muestra en la consola: rgb(34, 34, 34)

///
///
///
///
///
//// Ahora para hacer una modificación en una propiedad de CSS, la manera correcta de hacerla sería:

// $variable.style.setProperty("Propiedad a modificar/agregar", "Valor de dicha propiedad");   === igual a ===  ↓↓↓↓

$linkDOM2.style.setProperty("text-decoration", "none"); //Es decír: así
//
//Otro ejemplo sería:
$linkDOM2.style.setProperty("display", "block");

///Ahora, también se podría hacer con el punto:
// $variableDOM.style.propiedad = "Valor de la propiedad"
//Es decír:
//De aquí hacia abajo será modificación del boton DOM que se creo.

$linkDOM2.style.width = "50%"; // Así.
//

$linkDOM2.style.textAlign = "center";
//

$linkDOM2.style.marginLeft = "auto";
//

$linkDOM2.style.marginrigth = "auto";
//

$linkDOM2.style.padding = "1rem";
//

$linkDOM2.style.borderRadius = "0.5rem";

//Hasta aquí se modificó el boton del DOM  ↑↑↑↑
/////////////

//Console.log() para ver cambios en la consola:

console.log($linkDOM2.style); //Aquí mostrará un CSSStyleDeclaration un poco más sencillo con las propiedades modificadas.

console.log($linkDOM.getAttribute("style")); //Con este mostrará en específico lo que se ha modificado: background-color: rgb(247, 223, 30); color: rgb(34, 34, 34); text-decoration: none; display: block; width: 50%; text-align: center; margin-left: auto; padding: 1rem; border-radius: 0.5rem;

console.log(getComputedStyle($linkDOM2)); //Aquí en este se mostrará un CSSStyleDeclaration  más completo de información, más desmenuzado.

console.clear();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Variables CSS --- Custom Properties CSS.

//Estas variables en const hacen referenia al DOM y/o documento html.
const $html = document.documentElement,
  $body = document.body;

//En esta variable let se relaciona para la variable style en :root que se creo en el html --- Es decir que los colores de la variable :root se relacionan aquí en una variable para poder usar.
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

//Aquí ya se hace uso de los colores que se enlazaron dentro de las variables let varDarkColor y varYellowColor.
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//Ahora se va a modificar la variable --dark-Color
//La modificación de color se generaría aquí ↓↓↓
$html.style.setProperty("--dark-color", "#000"); //Aquí no genera ningún cambio ya que según entiendo del video, Se debe actualizar la variable con el que se controla el color en el documento js.
//Es decir, así:

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-Color", varDarkColor);

/////////// Así con esas dos líneas de código se generaría el cambio correspondiente. ↑↑↑↑↑↑↑
