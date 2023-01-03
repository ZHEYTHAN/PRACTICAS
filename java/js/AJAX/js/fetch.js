//CAPITULO 107

(() => {
  const d = document;

  const $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json(); //ESTO ES PARA PASAR LA INFO DE JSON A JS
      //.json || .text || .blob
    })
    .then((json) => {
      console.log(json);
      // $fetch.innerHTML = json;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() =>
      console.log("Esto se ejecutará independientemente de la promesa de fetch")
    );
})();

//MINUTO 12
