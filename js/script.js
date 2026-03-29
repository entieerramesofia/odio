const btn = document.getElementById("toggleBtn");
const box = document.getElementById("hiddenContent");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
});

// opcional: cerrar al hacer click en el fondo
box.addEventListener("click", () => {
  box.classList.remove("active");
});