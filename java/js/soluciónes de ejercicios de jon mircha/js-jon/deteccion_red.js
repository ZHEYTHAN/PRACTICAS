//CAPITULO 93

const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  
  // w.addEventListener("online", (e) => console.log(n.onLine));
  // w.addEventListener("offline", (e) => console.log(n.onLine));

  const isOnLine = () => {
    const $div = d.createElement("div");

    if (n.onLine) {
      $div.textContent = "Conexión Establecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Se Ha Perdido La Conexión...";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);

    setTimeout(() => d.body.removeChild($div), 3000);
    
  };

  w.addEventListener("online", (e) => isOnLine());
  w.addEventListener("offline", (e) => isOnLine());

}

// FIN DE CAP.