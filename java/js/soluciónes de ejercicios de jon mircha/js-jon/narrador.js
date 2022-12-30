//CAPITULO 104

const d = document,
  w = window,
  n = navigator;

export default function speechReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    // speechSynthesisUtterance() es una Api para usar de narrador.
    speechMessage = new SpeechSynthesisUtterance();

  // Es para mostrar el nodeList de la API.
  // console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // Este console.log es para ver el nodeList de las voces que reconoce el sistema
    // console.log(w.speechSynthesis);
    // console.log(w.speechSynthesis.getVoices());

    //Para poder ejecutar el API, se debe colgar al window y adicional se ejecuta así dentro de un listener.
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      // console.log(e);

      //Por eso esta variable esta como arreglo vacio arriba.
      //
      //
      voices = w.speechSynthesis.getVoices();
      //
      //
      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} ********* ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });
  //
  //
  //
  //
  //
  //

  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
    }
    // console.log(speechMessage);
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}

//min15
