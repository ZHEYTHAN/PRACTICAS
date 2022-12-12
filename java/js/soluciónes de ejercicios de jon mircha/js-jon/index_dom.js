import hamburguerMenu from "./menu_hamburgesas.js"; //Importa js de menu de hamburguesa
import { alarma, digitalClock } from "./reloj.js"; //Importa el cap 82 de creación del reloj y cap 83 de la alarma
import { shortcuts,moveBall } from "./teclado.js"; //Importa el cap 84 de aprendizaje de los shortCuts

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");//Del documento hamburguesa del primer ejercicio. //cap 81
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"); //Para iniciar el reloj // cap del reloj 82
  alarma("/java/js/soluciónes de ejercicios de jon mircha/assets/sonidos/niebla.mp3", "#activar-alarma", "#desactivar-alarma") //Cap 83
});

  //Capitulo 84 -- aprendizaje de los shortCuts ↓↓↓↓
  /*
  Hay tres eventos para el teclado.

  * keydown: Es cuando se oprime cualquier tecla.
  * keyup: Es cuando se deja de oprimir cualquier tecla.
  * keypress: Es cuando se mantiene oprimido cualquier tecla.
 
  */

  //Para verlo se ejecuta la function shortcuts(e) // esta función es de la hora teclado.js (importado de ahí).
// * keydown: Es cuando se oprime cualquier tecla.↓↓

/* 

});
 */


/*
// * keyup: Es cuando se deja de oprimir cualquier tecla.
d.addEventListener("keyup", e => {
  console.log("******************************* key up *********************************");
  shortcuts(e);
});
*/

// * keypress: Es cuando se mantiene oprimido cualquier tecla.
/*
d.addEventListener("keypress", e => {
  console.log("******************************* key press *********************************");
  shortcuts(e);
});
*/

d.addEventListener("keydown", e => {
  // console.log("******************************* key down *********************************");
  shortcuts(e);
  moveBall(e, ".ball", ".stage"); //Al ser clases, es importanten ponerles el punto al inicio, sino me va a generar un error.
})