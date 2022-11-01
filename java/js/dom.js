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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.clear();

/*
******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
*/

//Desde aquí se va a trabajar los DATA-ATTRIBUTES

//Manejo de data en el DOM -- -interacción.

/* Data-Attributes 
  La creación de propios atributos, para crearlos es escribir en el documento HTMl la palabra data seguido de un guión y seguido del nombre que se desea: ejemplo:
  data-example:""  --- dentro de la etiqueta que se quiere manipular.

  Según entiendo, los data son una clase de etiqueta que permite registrar información importante --- TENER PRESENTE DE QUE NO ES SEGURO O CONVENIENTE REGISTRAR USUARIOS Y CONTRASEÑAS (Información sensible).
*/

//lang en html es una anotación de data, se va a llamar:

console.log(document.documentElement.lang); //Aquí en consola aparecerá es: de lenguaje en el html

//También se pueden llamar de otra forma y es la mejor forma de llamarlo.
console.log(document.documentElement.getAttribute("lang")); 

//Aquí vamos a acceder al primer enlace href:
//De esta forma detecta la url y la trae
console.log(document.querySelector(".link-dom").href); // Esto a través de la etiqueta de clase.

console.log(document.querySelector(".link-dom").getAttribute("href")); //Con este me trae la especificidad de donde está el documento, es decir ("DOM_introducción.html")


////// Ahora para generar un cambio dentro de una etiqueta como por ejemplo la de lang que está en la línea 123; lo vamos a hacer así:

document.documentElement.lang = "en"; //Aquí se cambiará directamente en la consola, en el documento html no se verá el cambio, solo se verá en la consola.
console.log(document.documentElement.lang); //Aquí ya arrojará el "en" en la consola, ya que aquí ya se abrá ejecutado el cambio correspondiente.

// De esta manera on el set también se puede generar la modificación correspondiente
document.documentElement.setAttribute("lang", "es-CO"); //Aquí genera el cambio
console.log(document.documentElement.lang); //Aquí muestra en consola el cambio aplicado.

////// AHORA, PARA NO ESTAR ESCRIBIENDO DOCUMENT A CADA MOMENTO SE PUEDE HACER A TRAVÉS DE VARIABLES.

const $linkDOM = document.querySelector(".link-dom"); //Como buena práctica es bueno que las variables que llamen algo del documento html lleven un signo de dollar antes del nombre $. con el fin de saber que variables son las de js y que variables van relacionadas con el documento html. (Guarda un elemento del DOM)

$linkDOM.setAttribute("target", "_blank"); //Como el enlace DOM está direccionado a la misma página, al darle el atributo de target: _blank cargará la paágina en otra hoja pero mostrará lo mismo

$linkDOM.setAttribute("rel", "noopener"); //Esto es de buena práctica para que el nuevo enlace que se abre no se relacione con el anterior (Para evitar que haya sobre control).

$linkDOM.setAttribute("href", "https://youtube.com/jonmircha"); //Con este atributo direccionamos a el enlace que queramos direccionar.

console.log($linkDOM.hasAttribute("rel")); //Para ver que esta propiedad exista.

//De la siguiente forma se elimina un atributo:
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); //Con este console.log es para validar de que se haya eliminado, pues si se eliminó debe de dar false.


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


//Data-Attributes ((Los atributos creados x nosotros mismos.))

console.log($linkDOM.getAttribute("data-description")); /*Este fue creado en la línea n° 38 del documento HTML:     <a class="link-dom" href="DOM_introduccion.html" data-description="Document Object Model">DOM</a>   Y en consola mostrará esto: "Document Object Model" */


console.log($linkDOM.dataset);//Esto se mostrará como un DOMStringMap{}
//Dentro de lo que muestra en DOMStringMap{} mostrará: {id: '1', description: 'Document Object Model'}; Es decir que mostrará los que haya dentro de lo que se invoca.
//$linkDOM es una variable, dentro de esa variable se relaciona con el querySelector(".link-down") que es una clase en un a del documento html(Una etiqueta de enlace).

//Para obtener un data de manera especifica se usa el punto más la anotación:

console.log($linkDOM.dataset.description);//En consola no aparece la palabra data, sino lo que está después del guión: data-description== en consola == description: Document Object Model

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento") ///Así se modificaría el data con la propiedad set --- modificaría de: "Document Object Model" a  "Modelo de Objeto del Documento"

console.log($linkDOM.dataset.description);//Con esto se comprueba de que el cambio se haya efectuado en consola (Solo para visualizar)


// Ahora Existe otra forma de modificar también el data ---  Una es la forma de la línea 180 ↑↑ y otra es la siguiente:

$linkDOM.dataset.description = "Suscríbete a mi canal y comparte."; //Con dataset.
console.log($linkDOM.dataset.description);

/////////////////////////////////////////////
/////////////////////////////////////////////

console.log($linkDOM.hasAttribute("data-id")); //Aquí dará true ya que en el documento html en la línea 38 si existe.

console.log($linkDOM.removeAttribute("data-id"));

console.log($linkDOM.hasAttribute("data-id"));














