//CAPITULO 99 SCROLL SPY --

const d = document,
  w = window,
  n = navigator;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  // cb =  callback
  const cb = (entries) => {
    // console.log("entries", entries);

    entries.forEach((unaEntrada) => {
      // console.log("Una entrada:", unaEntrada);

      const id = unaEntrada.target.getAttribute("id");

      if (unaEntrada.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const osberver = new IntersectionObserver(cb, {
    // root
    // rootMargin: "-250px", //En negativo para que su area interna sea menor (Como es un solo valor, este valor aplica para los cuatro lados: top bot, left y right)
    threshold: 0.5, //Esto es límite -- y el 0.5 es para decir qyue cuando tenga el 50% de la pantalla, se ilumine. Si se pone como arreglo [0.5,0.75] es decir [Min y max] se peude manejar así.
  });

  $sections.forEach((el) => osberver.observe(el));
}
