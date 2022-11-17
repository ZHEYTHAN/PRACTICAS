//Esto sería para el uso, no para la creación!!!!!!!!!!!

const $cardsss = document.querySelector(".cards"), //Esta variable se deja con 3 sss ya que en js anteriores se ha declarado como cards y cardss
  //Esta $cardsss está vinculada a la clase cards que está en section.
  //
  //
  $template = document.getElementById("template-card").content, // Este es para acceder al contenido dentro de la template (Direccionado con id) -- Importante ponerle el .content al final para que se acceda al contenido dentro del template.
  //
  //
  //
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología", //Los title se dejarán como atributo en la etiqueta img y como texto en la etiqueta figcaption
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura ",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ]; //Este cardContent será una variable que contiene el arreglo que se va a agregar dinamicamente a las nuevas tarjeta que se incorporarán dentro de las template
//
//
//
//

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img), //Aquí selecciona la etiqueta img y le agrega el atributo src de la variable cardContent
    //
    //

    $template.querySelector("img").setAttribute("alt", el.title), //Aquí selecciona la etiqueta img y le agrega el atributo alt de la variable cardContent
    //
    //

    ($template.querySelector("figcaption").textContent = el.title); //Aquí se selecicona la etiqueta figcaption y se agrega el texto que está dentro de la variable cardContent en el arreglo title.
  //
  //

  let $clone = document.importNode($template, true); //Aquí lo que hace es que el proceso se repita para los 5 arreglos de la variable cardContent.
  //Es importante que dentro del parentesis de la propiedad .importNode() este la variable que va al DOM, una coma, y un boolean en true para que se haga con todos los arreglos que se requiera (ya que si se deja en false solo tomará el primero y/o el último).
  //
  //
  $fragment.appendChild($clone); //Aquí lo que se agrega es todo lo que está en la variable let $clone --- a la etiqueta de la variable $fragmento
});

$cardsss.appendChild($fragment); //Aquí ya se agrega todo lo que fue agregado en $fragment a la variable cardsss

//LAS ETIQUETAS TEMPLATE NO SE RENDERIZAN EN EL DOM!!
