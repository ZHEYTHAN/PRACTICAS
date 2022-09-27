/*
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
*/ //Así como está arriba es una forma para exportar.

//Otra forma sería llevar las funciones como objetos después de declarar la función, por ejemplo:

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//Aquí es donde se unifica para exportar en un solo objeto.  ↓↓↓↓
export const aritmetica = {
  sumar,
  restar,
};
