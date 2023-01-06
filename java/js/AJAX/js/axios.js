//CAPITULO 109

//AXIOS:

(() => {
  const d = document;

  const $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();
  //
  //
  //.then() se usaría para trabajar la respuesta de la peticion .get que se está haciendo.
  //.catch() para manejar el error.

  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    //
    //
    .then((respuesta) => {
      // console.log(respuesta);
      //
      //
      //
      let json = respuesta.data;
      //
      //
      json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      //
      //
      //
      $axios.appendChild($fragment);
    })
    //
    //
    .catch((error) => {
      // .response es de la librería de axios --- ver manejo de errores (handling errors) para ver eso.
      // console.log(error.response);
      //
      //
      //
      let message = error.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    //
    //
    .finally(() => {
      // console.log(
      //   "Aquí se ejecuta el código que se requiera independientemente de la respuesta del then o del catch"
      // );
    });
  //
  //
})();
