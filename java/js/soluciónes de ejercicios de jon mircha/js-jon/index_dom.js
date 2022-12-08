import hamburguerMenu from "./menu_hamburgesas.js";
import { digitalClock } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");//Del documento hamburguesa del primer ejercicio.
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"); //Para iniciar el reloj // cap del reloj 82
  })
