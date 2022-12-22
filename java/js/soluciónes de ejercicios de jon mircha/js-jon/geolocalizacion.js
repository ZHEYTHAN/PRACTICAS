//CAPITULO 95

const d = document,
  n = navigator,
  w = window;

export default function laLocalizacion(id) {
  const $id = d.getElementById(id),
    options = {
      //Estas son las opciones para la geolocalización -- en la documentación hay más, por el momento solo se ponen estás tres que son importantes.
      enableHightAccuracy: true, //Para una lectura más precisa de la geolocalización.
      timeOut: 5000, //Tiempo expresado en ms
      maximumAge: 0, //Para que no se guarde la info en el caché y que en su próxima lectura, sea una lectura de posicionamiento limpia.
    };

  const success = (position) => {
    //Esto es para cuando el usuario da el permiso en el navegador

    let coords = position.coords;

    console.log(position);

    $id.innerHTML = `
    <p> Tu posición actual es: </p>
    <ul>
    <li>latitud: <b>${coords.latitude}</b> </li>
    <li>Longitud: <b>${coords.longitude}</b> </li>
    <li>Precisión: <b>${coords.accuracy}</b> Metros. </li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    //Esto es para cuando se genera un error o el usuario no da los permisos en el navegador.

    $id.innerHTML = `<p><mark> Se ha generado el error= ${err.code}: ${err.message}</mark></p>`;

    console.log(`Se ha generado el error= ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options); // En este se necesita de estos tres parámetros (success que es confirmación, error para el error, options para las opciones)
}
