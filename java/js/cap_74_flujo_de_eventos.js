//Capitulo 74 --- DOM: flujo de eventos (Burbija y Captura).

const $divsEventos = document.querySelectorAll(`.eventos-flujo div`); //De esta manera se enlaza a todas las div dentro de la section al mismo tiempo.


console.log($divsEventos); //Esto es para poder visualizar las tres divs dentro de la section

/////////////////////////////////////////////////////

// Se crea una function para poder usarla con un .forEach

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);// Esto muestra la div ((Con this.className)) 
 //de donde se origina el click.
}

//Este forEach se va a dejar comentado para el siguiente caso (Ya que no se puede crear otro porque generaría conflicto).


//FASE DE BURBUJA ((De adentro hacia afuera)).

// $divsEventos.forEach(div =>{
//     div.addEventListener(`click`,flujoEventos) //Con ese forEach se puede recorrer las divs para este cap.
// })

//Ahora, esto se puede hacer de adentro hacía afuera (Como sucede en las líneas de arriba (Hola te saluda tres, el click lo originó tres
// Hola te saluda dos, el click lo originó tres // Hola te saluda uno, el click lo originó tres)) o viceversa.


//Para que sea de la uno a la tres, en el addEvenListener se requiere de un tercer valor:  .addEvenListener(`la accion (click), la funcion (flujoEventos), valor boolean`).
//como está arriba, es como si el tercer valor boolean estuviera en false, para que sea invertido debe estar en true: ((Que sería la fase de captura.))

//FASE DE CAPTURA:
//Se deja comentado para pdoer mostrar con el objeto como quedaría.
// $divsEventos.forEach(div =>{
//     div.addEventListener(`click`,flujoEventos, true);
// });

//También en lugar del valor boolean, se le puede pasar un objeto para que haga referencia a que sea captura o burbuja.

$divsEventos.forEach(div =>{
    div.addEventListener(`click`,flujoEventos, {
        capture:false, //Aquí en false (queda en modo burbuja(De adentro hacia afuera como se hizo arriba en la prmera forEach))
        //En true queda en modo captura (De afuera hacia adentro(Como el segundo forEach))
        once:true //Este es para que se peuda ejecutar una sola vez, en true es para que quede activa.
    });
});


//Finalización de capítulo 74