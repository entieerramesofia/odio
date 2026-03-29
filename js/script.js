const btn = document.getElementById("toggleBtn");
const box = document.getElementById("hiddenContent");

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