// CAPITULO 94

const d = document,
  n = navigator;

export default function webCam(id) {
  //Para capturar el id de video.
  const $video = d.getElementById(id);

  //Condicional para la detección.

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: false, audio: false }) //En true enciende el audio, en false apaga el audio, aplica igual para video.

      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })

      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p>¡Sucedió el siguiente error! = <mark>${err}</mark></p>`
        );
        console.log(`¡Sucedió el siguiente error! = ${err}`);
      });
  }
}
