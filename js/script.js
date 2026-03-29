const btn = document.getElementById("toggleBtn");
const box = document.getElementById("hiddenContent");
const videoBg = document.getElementById("videoBg");

if (videoBg) {
  const tryPlayVideo = () => {
    videoBg.muted = true;
    const playPromise = videoBg.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Some browsers delay autoplay until the first interaction.
      });
    }
  };

  videoBg.defaultMuted = true;

  window.addEventListener("load", tryPlayVideo);
  document.addEventListener("click", tryPlayVideo, { once: true });
  document.addEventListener("touchstart", tryPlayVideo, { once: true });
}

if (btn && box) {
  btn.addEventListener("click", () => {
    box.classList.toggle("active");
  });

  box.addEventListener("click", () => {
    box.classList.remove("active");
  });

  box.addEventListener("click", (e) => {
    if (e.target === box) {
      box.classList.remove("active");
    }
  });
}
