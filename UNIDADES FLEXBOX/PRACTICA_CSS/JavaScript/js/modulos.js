//import password, { PI, usuario } from "./constantes.js"; //Cuando se importa, se debe poner .js al final porque sino dará el error 404 not found.
//import saludar from "./constantes.js "; //Solo se puede tener un EXPORT DEFAULT ya que al tener dos o más va a generar conflicto.
import saludar, { Saludar, PI, usuario } from "./constantes.js"; //Funciones antes del corchete, separados por comas, variables, constantes y clases dentro de los corchetes, también separados por comas.
import { aritmetica as calculo } from "./aritmetica.js"; //Si el import esta aquí habilitado, pero no hay una invocación (Por ejemplo un console.log), este se vera aquí en su línea de código un poco traslucido, hasta que haya una invocación.
//Se puede crear un alias para cambiar el nombre después de la importación usando as y luego el alias.
//Si no se aplica la palabra export, no se puede importar en otro documento js, esto permite que solo se exporten cosas necesarias y/o predeterminadas.

console.log("Archivos módulos.js");
console.log(PI, usuario);
//console.log(sumar(3,4)); Así se invoca de la primera forma y abajo ya vueltos en un objeto  ↓↓
//console.log(aritmetica.sumar(3, 4));
console.log(calculo.sumar(3, 4)); //Una vez se hace el cambio de alias, se usa el nuevo nombre, ejemplo: calculo.
console.log(calculo.restar(3, 4));

saludar();
let saludo = new Saludar();
saludo;
