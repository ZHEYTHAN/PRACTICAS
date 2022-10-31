console.log(
  "**************************************** Elementos del documento **************************************************"
);

//Así es como se podría interactuar con cada parte del documento, tan de manera general como de manera individual.
//Tener presente de que para ejecutarlo en una página cualquiera, se abre el inspector de archivos, se va a consola y solo se escribe lo de dentro de los paréntesis, no se necesita de escribir el console.log().

console.log(window.document); //Muestra como tal todo el documento de la página (Toda su estructura).
console.log(document); //Muestra como tal todo el documento de la página (Toda su estructura).
console.log(document.head); //Muestra todo lo que se encuentra en el head del documento (hmtl).
console.log(document.body); //Muestra todo lo que se encuentra en el body del documento (html).
console.log(document.documentElement); //Esta sería la forma para ver todo el documento html, sin embargo aquí no se mostraría el doctype (<!DOCTYPE html>)(Lo que dice que tipo de archivo es).
console.log(document.characterSet); //Es para ver el UTF-8 (formato de codificación de caracteres(Unicode Transformation Format)) (Anteriormente era document.charset) Ahora es CharacterSet.
console.log(document.title); //Muestra el titulo del documento (En las etiquetas <title> </title>).

///// estos que siguen los mostrara como si fueran arreglos (array), pero no son arreglos como tal ↓↓↓↓, es más como una forma para poder mostrarlo ya que hacen parte de HTMLCollection[].

console.log(document.links); //Muestra todos los links o enlaces dentro del documento.
console.log(document.images); //Muestra todas las imágenes dentro del documento.
console.log(document.forms); //Este mostrará todos los formularios
console.log(document.styleSheets); //Esto muestra las hojas de estilo que tiene enlazadas el documento.
console.log(document.scripts); //Esto muestra todos los scripts que tiene enlazado el documento.

//El siguiente es para mostrar lo que se selecciona en la página ↓↓
// console.log(document.getSelection().toString()); //getSelection al ser un metodo debe llevar (), y toString es para volverlo cadena de texto.
//Esto se va a meter en un setTimeOut para mostrar que funciona

// setTimeout(() => {
//   //
//   console.log(document.getSelection().toString()); // En este siteTimeOut es donde se demuestra el tema de cuando se selecciona algo.
// }, 3000); //

//Ahora, también se puede escribir directamente en el documento HTML de una forma diferente ↓↓↓↓
//Claro está que no es una buena práctica.
// document.write("<h2>Hola mundo desde el DOOM </h2>"); //Esto queda escrito en la última parte del documento.
console.clear()

/* ************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */

/*
CAPITULO 62 -- DOM:

*NODOS -- ELEMENTOS -- SELECTORES* 
*/
//Esto es para traer info del documento html al cual va enlazado el document js.
//ACCESO:

//Los siguientes tres selectores ya no se usan, pero se ponen de ejemplo para tenerlos presente:
//getElement y entre paréntesis lo que se busca()
//Estos los mostrará como una colección de html (HTMLCollection()).


console.log(document.getElementsByTagName("li")); //Aquí imprimirá todas las listas disponibles dentro del documento html
console.log(document.getElementsByClassName("card")); //Con este getElementByClassName() trae el nombre de una clase en especifico (Todas las etiquetas html que contengan ese mismo nombre de clase)

//IMPORTANTE=== este getElementByName() trae a todas las etiquetas que tengan la propiedad especifica del paréntesis.
//Este ByName lo pasará como un NodeList:
console.log(document.getElementsByName("nombre"));

//
//
//
// De aquí en adelante si se usan --  pd: se usarán tres de manera especifica!!
/*
console.log(document.getElementById())

*/

console.log(document.getElementById("menu"));//Este es para obtener todas las etiquetas con id, que tengan el id especificado dentro de los paréntesis.
// console.log(document.querySelector());//Este es para seleccionar una cosa en especifico
// console.log(document.querySelectorAll()); // Con All selecciona todos los mismos --- Ejemplo:


//Esto los muestra como um NodeList.
console.log(document.querySelector("a")); // Aquí selecciona solo la primera etiqueta a (La primera unicamente).

console.log(document.querySelectorAll("a")); //Aquí selecciona todas las etiquetas a dentro del documento html.

console.log(document.querySelectorAll("a").length); //Con la propiedad .length muestra el número (La cantidad).

//De esta forma se imprime el código como está escrito en el html (EScribe el código de la etiqueta que se especifica.)

document.querySelectorAll("a").forEach((el) => console.log(el))

/*
Hay algo que se debe tener presente --- si se necesita de especificar una clase o un id, se debe hacer de la misma forma en como se especifica en CSS, es decir, si es un ID, se debe de poner # y el nombre del id ejemplo:
#menu
 Ahora, de la misma forma para la clase, se debe poner el punto y luego el nombre de la clase:
 .card
*/
console.log(document.querySelector(".card")); // Aquí mostrará la primera card (Ya que el selector está para singular)
console.log(document.querySelectorAll(".card")); // Aquí mostrará todas las card ya que aquí si está para todas.

//Ahora, en un caso de que hayan varios elementos, pero necesitamos solo el segundo, tercero o cuarto, se puede acceder de la misma, con la coordenada del elemento que se requiere, un ejemplo será con las card, hay varias card y vamos a seleccionar la card número 3 (Es decir posición 2)

console.log(document.querySelectorAll(".card")[2]); //Se pone en corchetes el número.

// Ahora si se necesita algo dentro de un contenedor, como por ejemplo, dentro del id menu hay una lista, para acceder a la lista podríamos hacer así:

console.log(document.querySelectorAll("#menu li"));//Mostrará un NodeList con los elementos li.
console.log(document.querySelector("#menu li")); //Si quiero solo el primer elemento de la lista, es con el querySelector (Sin el All)




