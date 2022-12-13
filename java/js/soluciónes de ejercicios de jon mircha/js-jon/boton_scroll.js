const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", e => { 

    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 999) {
      $scrollBtn.classList.remove("hidden")
    } else {
      $scrollBtn.classList.add("hidden")      
    }
    
    console.log(w.pageYOffset, d.documentElement.scrollTop); //Ambos son para mostrar que tanto baja el scroll desde top. (Lo muestra en px).


  });
  //
  //
  d.addEventListener("click", e => { 
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0
      })
    }
  });

}