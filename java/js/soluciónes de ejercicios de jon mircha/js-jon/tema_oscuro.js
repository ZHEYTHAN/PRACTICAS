//Capitulo 88

const d = document;

export default function darktheme(btn, classDark){
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  
  console.log($selectors);
  
  let moon = "🌛",
    sun = "🌞";
 
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
      } else {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    }
  });
  
}

//Falta el consumo d Api para el local storage para que se conserve el theme que se deje seleccionado.
//Sigue cap 89