//CAPITULO 108
//El mismo fetch pero se dara uso de Async y Await.

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  //
  //

  async function getData() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await respuesta.json();
      //
      // console.log(respuesta, json);
      //
      //Para generar el error se va a hacer una sola condicionar aquí, ya que throw redirecciona el mensaje al catch.
      if (!respuesta.ok)
        throw { status: respuesta.status, statusText: respuesta.statusText };
      //
      //
      //

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone} `;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
      //
      //
      //
    } catch (elError) {
      //
      //
      let message = elError.statusText || "HA OCURRIDO UN ERROR";
      $fetchAsync.innerHTML = `Error ${elError.status}: ${message}`;
    } finally {
    }
  }

  getData();
})();
