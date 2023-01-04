//CAPITULO 108
//El mismo fetch pero se dara uso de Async y Await.

(() => {
  const d = document;

  const $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();

  //
  //

  async function getData() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await respuesta.json();
    } catch (elError) {
    } finally {
    }
  }

  getData();
})();

//MIN 7
