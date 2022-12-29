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

  // Es ara mostrar el nodeList de la API.
  console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    // Este console.log es para ver el nodeList de las voces que reconoce el sistema
    console.log(w.speechSynthesis.getVoices());
    console.log(w.speechSynthesis);
  });

  d.addEventListener("change", (e) => {});

  d.addEventListener("click", (e) => {});
}

//min15
