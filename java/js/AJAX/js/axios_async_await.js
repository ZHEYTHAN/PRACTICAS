// CAPITULO 110
//
// Mismo proceso de Axios sumandole Async y Await.

(() => {
  const d = document;
  //
  //
  //
  const $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();
  //
  //
  //En este ejemplo, como es asincronico, el axios.get() va dentro del try.
  //axios.get("https://jsonplaceholder.typicode.com/users");
  //
  //
  //
  async function getData() {
    try {
      let respuesta = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        ),
        //
        //
        //RECORDAR, como el objeto de la API ya viene parseado, no es necesario ponerle .json() para parsear, sino pedirle a la librería esto con el metodo .data;
        json = await respuesta.data;

      //
      //
      console.log(respuesta, json);
      //
      //
      json.forEach((el) => {
        const $li = d.createElement("li");
        //
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        //
        $fragment.appendChild($li);
      });
      //
      $axiosAsync.appendChild($fragment);
      //
      //
    } catch (esteError) {
      //
      console.log(esteError.response);
      //
      //
      let message = esteError.response.statusText || "Ocurio Un Error";
      $axiosAsync.innerHTML = `Error ${esteError.response.status}: ${message}`;
      //
      //
    } finally {
      console.log("Este finally se ejecuta sin importa el try y el catch");
    }
  }

  //
  //
  getData();
  //
  //
})();
