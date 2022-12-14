// CAPITULO 97

const d = document,
  w = window,
  n = navigator;

export default function draw(btn, selector, ganador) {
  const $ganador = d.getElementById("ganador");

  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length), // Siempre es mejor dejarlo en Math.floor para que redondee y no quede undefined cuando el valor redondeado sea superarior al lenght
      winner = $players[random];

    // console.log($players, random, winner);

    return `el ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(`${result}`);
      console.log(result);
      $ganador.innerHTML = `<br> ${result} </p>`;
    }
  });
}
