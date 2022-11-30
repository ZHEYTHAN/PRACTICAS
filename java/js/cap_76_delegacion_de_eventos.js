//Aqui es más que todo para resumir lo de los cap 74 y 75 de una mejor manera:

function eFlujo(e) {
  console.log(
    `Hola, te saluda ${e.target.className}, el click se originó ${e.target.className}`
  );
  e.stopPropagation();
}

document.addEventListener(`click`, (e) => {
  console.log(`Click en`, e.target);

  //Se añade condicional para las div (Con la cual sale el console.log de la function eFlujo())

  if (e.target.matches(`.e-flujo3 div`)) {
    eFlujo(e);
  }

  if (e.target.matches(`.e-flujo3 a`)) {
    //Se puede colocar una condicional para buscar un selector valido.
    //La propiedad .matches(`Aquí va la propiedad a buscar`) es la que se encarga de esto.

    alert(`Hola, Soy Andy Páez en etapa práctica de Js`);
    e.preventDefault();
  }
});

//Finalización de CAPITULO #76
