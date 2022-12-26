// CAPITULO 100 --- VIDEO INTELIGENTE.

const d = document,
  n = navigator,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entradas) => {
    entradas.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  $videos.forEach((el) => observer.observe(el));
}
