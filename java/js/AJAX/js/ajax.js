//CAPITULO 106
//Para que AJAX funcione, si o si debe estar en servidor (Aplica y funciona el servidor local de live server) porque si no, no va a funcionar.
//Se va a generar consumo de una API externa.
//DESCARGAR JSON FORMATTER PARA EXTENSIÓN DE CHROME EN EQUIPO DE CASA. ----

const d = document;

//  1) --Lo primero es instanciar el objeto XMLHttpRequest() dentro de una variable, así como en el ejemplo de abajo que queda en la variable:
// const xhr = new XMLHttpRequest();
//
// 2) -- Lo segundo es asignar el o los eventos que se vayan a manipular de la petición (Para este caso la lógica de la programación va dentro de la callBack
//que va en el/los eventos).
//
// 3) -- La tercera parte es abrir la petición --- establecer el metodo en el cual se va a hacer: GET, HEAD, PUT, POST, TRACE y el recurso (la url de donde se conecta
// El end-point, o como tal de donde sale el recurso).
//
// 4) -- Cuarto y último es enviar la petición, este último se aprenderá una vez se haya aprendido las otras tres.

//Primero se va a aprender a consumir de las API externas.
/* ********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 ***********************************************************************************************************************************************************************************************************************************
 */
(() => {
  const d = document;

  const xhr = new XMLHttpRequest(),
    $xhr = d.getElementById("xhr"),
    $fragment = d.createDocumentFragment();
  //
  //
  //
  // console.log(xhr);
  //
  //
  //
  //Esto requiere de tres parámetros, el primero esta declarado en la variable de xhr (XMLHttpRequest()), sel segundo es el evento "readystatechange" y el tercero es una callback que para este caso será el evento  e=>{}
  xhr.addEventListener("readystatechange", (e) => {
    //El número 4 representa uno de los estados de la propiedad XMLHttpRequest()
    // console.log(xhr);
    if (xhr.readyState !== 4) return;
    //
    //
    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("EXITO");
      //
      //Se genera una variable en donde se transforma la respuesta textual a formato de js (Como objeto)
      //

      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      // console.log("ERROR");
      //
      //
      let message = xhr.statusText || "Ha ocurrido un error";
      $xhr.innerHTML = `Error: ${xhr.status} :: ${message}`;
    }
  });

  //Luego el evento OPEN en la variable.
  //
  //
  //
  //Para la parte del open se debe tener presente de que uno de los parametros que se pide en open corresponde a RESPUESTAS SATISFACTORIAS de los http
  //Refiriendome a esta página en donde se evidencia y se ve las palbras que pueden ir allí, adicional de que cada palabra dependerá de lo que se requiere.
  //https://developer.mozilla.org/es/docs/web/HTTP/status

  //Como ejemplo:
  //GET es cuando se usa a través de la URL
  //POST a través de la cabecera del documento.
  //
  //
  //Aquí se usa GET ya que está obteniendo la info de formato json a través de una PÁGINA y seguido de ello la URL de donde se obtiene la info
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //
  //
  //
  //Luego sigue el enviar la información a través del metodo SEND()

  xhr.send();
})();

//MINUTO 26 --- CAP 106
