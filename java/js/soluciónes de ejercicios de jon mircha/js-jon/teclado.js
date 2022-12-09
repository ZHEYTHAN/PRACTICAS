const d = document; 

// CAP 84  ↓↓↓

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(`Control: ${e.ctrlKey}`);
  // console.log(`Alt: ${e.altKey}`);
  // console.log(`Shift: ${e.shiftKey}`);
  // console.log(e);

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

// CAP 84 ↑↑↑

// ***********************************************************************************************************
// ***********************************************************************************************************

// CAP 85 ↓↓↓

export function moveBall(e, ball, stage) {
  //Primero enlazar las clases a variables del DOM 
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
  
  //Un console log para saber  para saber el keyCode de las teclas que se van a usar:
  console.log(e.keyCode);
  // Y otro console para saber que tecla se está oprimiendo:
  console.log(e.key);

  //Luego un switch case para hacer funcionar las teclas:
  //Este switch funcionara con los keyCode de las flechas (37 izquierda, 38 arriba, 39 derecha y 40 abajo)
  switch (e.keyCode) {
    // IZQUIERDA -- LEFT
    case 37:
      
      break;

    // ARRIBA -- TOP
    case 38:
      
      break;
    
    // DERECHA -- RIGHT
    case 39:
      
      break;
    
    // ABAJO -- BOTTOM
    case 40:
      
      break;
  
    default:
      break;
  }
  
}

// CAPITULO 85 DOM EVENTOS DEL TECLADO  -- MIN 9:20