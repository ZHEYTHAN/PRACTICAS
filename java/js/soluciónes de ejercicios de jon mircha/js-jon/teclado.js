const d = document; 

export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`Control: ${e.ctrlKey}`);
  console.log(`Alt: ${e.altKey}`);
  console.log(`Shift: ${e.shiftKey}`);
  console.log(e);

  //Ahora, los shortCuts se pueden generar con condicionales if:

  if (e.key === "q" && e.altKey) {
    alert(`Haz lanzado una alerta con el teclado`);
  };

  if (e.key === "c" && e.altKey) {
    confirm(`Haz lanzado una confirmación con el teclado`);
  };

  if (e.key === "p" && e.altKey) {
    prompt(`Haz lanzado un aviso con el teclado`);
  };


}