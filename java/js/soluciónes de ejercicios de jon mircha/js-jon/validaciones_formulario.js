//CAPITULO 102

const d = document,
  n = navigator,
  w = window;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  // console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        // el interruptor de corto circuito || es para que o valide el pattern ("Que va a generar error ya que en el textArea no aplica un pattern"), O ue tome el data-attribute (que si es valido accediendo de esa forma.)
        pattern = $input.pattern || $input.dataset.pattern; //El dataset es para poder acceder a los data attribute de los html

      // console.log($input, pattern);

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  // Este addEventListener es para envíar el formulario.  ↓↓↓↓

  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    //Para que el envío de formulario funcione realmente, no debe tener preventDefault.
    alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 2000);
  });
}
