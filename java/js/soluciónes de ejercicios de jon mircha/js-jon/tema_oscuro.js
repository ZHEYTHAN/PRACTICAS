//Capitulo 88

const d = document,
  ls = localStorage;

export default function darktheme(btn, classDark){
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  
  console.log($selectors);
  
  let moon = "🌛",
    sun = "🌞";
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Del cap 89 ↓↓
  const lightMode = () => {
            $selectors.forEach(el => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {$selectors.forEach(el => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

   //Del cap 89 ↑↑
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  
//Falta el consumo d Api para el local storage para que se conserve el theme que se deje seleccionado.
//Sigue cap 89
//Consumo de APi localStorage.

  d.addEventListener("DOMContentLoaded", e => {
    console.log(ls.getItem("theme"));
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
      
    if (ls.getItem("theme") === "light") {
      lightMode();
    }

    if (ls.getItem("theme") === "dark") {
      darkMode();
    }

  });
  
}

//Sigue el cap 90.