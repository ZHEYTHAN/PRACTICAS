//CAPITULO 107

(() => {
  const d = document;

  const $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((respuesta) => {
    //   console.log(respuesta);
    //   return respuesta.ok ? respuesta.json(): Promise.reject(respuesta); // .json()ESTO ES PARA PASAR LA INFO DE JSON A JS
    //   //.json || .text || .blob (Blob sería para lo que sea diferente a texto)
    // })

    //.json()  en fetch reemplazaría lo que en XMLHttpRequest seria el .parse() para hacer que el/los documentos .json sean leíbles en formato js
    //Es decir que se vuelvan un arreglo [].
    .then((respuesta) =>
      respuesta.ok ? respuesta.json() : Promise.reject(respuesta)
    )
    .then((json) => {
      // console.log(json);
      // $fetch.innerHTML = json;
      //
      //
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} *** ${el.email} *** ${el.phone}`;
        $fragment.appendChild($li);
      });
      //
      //

      $fetch.appendChild($fragment);
    })
    .catch((error) => {
      // console.log(error);

      //
      //
      let message = error.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error   **** ${error.status}: ${message}`;
    })
    .finally(() => {
      // console.log("Esto se ejecutará independientemente de la promesa de fetch")
    });
})();
