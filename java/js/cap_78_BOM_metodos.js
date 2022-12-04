//Capítulo 78 BOM (Browser Object Model) ---- Métodos.

// window.alert("Mensaje de Alerta!");//Ventana en la parte superior de alerta!!

// window.confirm("Este es un mensaje de confirmación"); //Saca una pequeña ventana al igual que alert, solo que este da dos opciones (Aceptar y cancelar).

// window.prompt("Este es un mensaje de aviso para que escribas pendejadas. "); //Da una misma ventana que confirm, solo que aquí se habilita un recuadro para poder escribir.

//Si cuelga del mismo window, no es necesario escribir window.laProPiedad()

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");
let ventana;
//
//
//
//
//

//Este de open, abre otra ventana redireccionada (Como si fuera la etiqueta a) lo único es que solo es para usar tipo, inicie sesion con: para que abra otra ventana direccionada especificamente:
$btnAbrir.addEventListener("click", (e) => {
  // open("https://jonmircha.com"); //Así  ó de la siguiente forma:
  //Tener presente de que la variable let ventana se va a asociar pero para que close funcione en open.
  ventana = window.open("https://jonmircha.com");
});
//
//
//
//

// Este cierra la ventana que ha abierto open.
//Para que no cierre la ventana en la que se encuentra (Pestaña principal), se crea una variable para que no ocurra esto:

$btnCerrar.addEventListener("click", (e) => {
  ventana.window.close(); //Se haría así.
});

//
//
//
//
//El siguiente es para que se imprima lo que hay en pantalla.

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Aquí finaliza este cap 78
