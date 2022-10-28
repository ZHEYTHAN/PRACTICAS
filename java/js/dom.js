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

setTimeout(() => {
  //
  console.log(document.getSelection().toString()); // En este siteTimeOut es donde se demuestra el tema de cuando se selecciona algo.
}, 3000); //

//Ahora, también se puede escribir directamente en el documento HTML de una forma diferente ↓↓↓↓
//Claro está que no es una buena práctica.
document.write("<h2>Hola mundo desde el DOOM </h2>"); //Esto queda escrito en la última parte del documento.
