import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";//cap86
import hamburguerMenu from "./menu_hamburgesas.js"; //Importa js de menu de hamburguesa
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { alarma, digitalClock } from "./reloj.js"; //Importa el cap 82 de creación del reloj y cap 83 de la alarma
import { shortcuts, moveBall } from "./teclado.js"; //Importa el cap 84 de aprendizaje de los shortCuts
import darktheme from "./tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");//Del documento hamburguesa del primer ejercicio. //cap 81
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"); //Para iniciar el reloj // cap del reloj 82
  alarma("/java/js/soluciónes de ejercicios de jon mircha/assets/sonidos/niebla.mp3", "#activar-alarma", "#desactivar-alarma") //Cap 83
  countdown("countdown", "jun 04, 2023 18:00:00", "Feliz cumpleaños Andrés"); //Como solo se va a trabajar con un id y como se está invocado directo, no necesita el simbolo # --- ya que en la otra hoja de js se estará usando el              .getElementById
  scrollTopButton(".scroll-top-btn"); // 87

  responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&ab_channel=jonmircha" target="_blank" rel="noopener"> Ver el video </a> </br>    </br>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`); //CAPITULO 90
  
  responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.google.com.co/maps/place/CAI+Virrey/@4.6730731,-74.0538395,21z/data=!4m5!3m4!1s0x8e3f9af32e8d3bc1:0xbbcc404ff01a662f!8m2!3d4.6732039!4d-74.0539632?hl=es-419&authuser=0" target="_blank" rel="noopener"> Ver el Mapa </a>`,
    `</br></br>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.53470660332053!2d-74.05383946299946!3d4.673073116757796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af32e8d3bc1%3A0xbbcc404ff01a662f!2sCAI%20Virrey!5e0!3m2!1ses-419!2sco!4v1671055438596!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`); //CAPITULO 90
  //
  //
  responsiveTester("responsive-tester");//Capitulo 91
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

darktheme(".dark-theme-btn", "dark-mode"); //Se saco del DOMContentLoaded ya que en su js se va a usar en la funcion otro DOMContentLoaded y es para que no genere conflicto. // CAP 88 - 89