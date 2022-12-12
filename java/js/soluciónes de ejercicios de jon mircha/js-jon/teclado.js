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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Variables para el movimiento en X y Y:
let x = 0,
  y = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function moveBall(e, ball, stage) {
  //Primero enlazar las clases a variables del DOM 
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Variable para la colisión de la pelotita: --- variables para los limites:

  const limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();
  
  ////////////// un console log para ver sus valores:
  console.log( limitBall, limitStage);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  //Un console log para saber  para saber el keyCode de las teclas que se van a usar:
  //console.log(e.keyCode);
  // Y otro console para saber que tecla se está oprimiendo:
  //console.log(e.key);

  
  //Luego un switch case para hacer funcionar las teclas:
  //Este switch funcionara con los keyCode de las flechas (37 izquierda, 38 arriba, 39 derecha y 40 abajo)
  switch (e.keyCode) {
    // IZQUIERDA -- LEFT
    case 37:
      if (limitBall.left > limitStage.left) {
        x--; //Sentido negativo 
        e.preventDefault(); //Cada preventDefault se lanza con su evento dentro del case para que no afecte externamente los shortcurts o las teclas especiales.
      }
      break;

    // ARRIBA -- TOP
    case 38:
      if (limitBall.top > limitStage.top) {
        y--; //En la web el eje y es invertido, por eso el negativo es hacia arriba.
        e.preventDefault();
      }
      break;
    
    // DERECHA -- RIGHT
    case 39:
      if (limitBall.right < limitStage.right) {
        x++; //Sentido positivo
        e.preventDefault();
      }
      break;
    
    // ABAJO -- BOTTOM
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        y++; //Sentido hacia abajo.
        e.preventDefault();
      }
      break;
  
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`; //translate (posición X, posición Y) //Esto es lo que le da el movimiento y la dirección a la pelota.
  
}

 