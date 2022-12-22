//CAPITULO 96

const d = document,
  w = window,
  n = navigator;

export default function searchFilter(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      console.log(e.target.value); //Esto es para mostrar la cadena de texto que se genera dentro del input.

      if (e.key === "Escape") e.target.value = ""; //Esto es para cuando se oprima la tecla escape, se limpie lo que hay en el input.

      //Con este genera el filtro y busqueda. ↓↓↓↓
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}

// min 28
