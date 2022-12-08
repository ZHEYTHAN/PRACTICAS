import hamburguerMenu from "./menu_hamburgesas.js";
import { alarma, digitalClock } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");//Del documento hamburguesa del primer ejercicio. //cap 81
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"); //Para iniciar el reloj // cap del reloj 82
  alarma("/java/js/soluciónes de ejercicios de jon mircha/assets/sonidos/niebla.mp3","#activar-alarma","#desactivar-alarma") //Cap 83
  })
