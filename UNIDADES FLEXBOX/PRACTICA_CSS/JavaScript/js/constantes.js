export const PI = Math.PI;

//Si no se aplica la palabra export, no se puede importar en otro documento js, esto permite que solo se exporten cosas necesarias y/o predeterminadas.
export let usuario = "Andrés";
export let password = "qwerty";
//export default password;

//Solo se puede tener un EXPORT DEFAULT ya que al tener dos o más va a generar conflicto.

//EXPORT DEFAULT solo va a funcionar al inicio de la línea de código cuando es una función declarada, cuando se trata de una función expresada (O anónima, que es lo mismo) se debe poner defaul después de expresar la variable, ejemplo con password. ↑↑
//Dejo comentado esta función declarada con default para que no genere conflicto ya que solo puede haber un default.
/*
export default function saludar() {
  console.log("Hola Módulos +ES6");
}
*/

//Aquí dejo la función declarada sin valor EXPORT DEFAULT:
/*
export function saludar() {
  console.log("Hola Módulos +ES6");
}
*/
export default function saludar() {
  console.log("Hola Módulos +ES6");
}
//Ni con las funciones declaradas, ni con las clases generar problema al inicio de la línea de código el EXPORT DEFAULT; ejemplo de clase ↓↓
/*
export default class Saludar {
  constructor() {
    console.log("Hola Módulos +ES6");
  }
} 
*/
export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
