//CAPITULO 82

const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`;
      }, 1000);

      e.target.disabled = true;
    }
    
    
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = `Haz desactivado el reloj. <br/> <br/> `;
      d.querySelector(btnPlay).disabled = false;
    }
  });


}

export function alarma(){}