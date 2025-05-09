// Quadrado com Efeitos CSS e Eventos de Clique

// Objetivo: Criar um quadrado com múltiplos eventos interativos.
// Requisitos:
// Ao passar o mouse, aplique um efeito CSS (como girar, mover ou redimensionar).
// Ao clicar, mude a cor do quadrado e exiba um texto abaixo dele.

const square = document.getElementById("square");

square.addEventListener("mouseover", () => {
  square.style.width = "300px";
  square.style.height = "300px";
  square.style.transition = ".3s ease-in-out";
  square.addEventListener("mouseout", () => {
    square.style.width = "200px";
    square.style.height = "200px";s
});

square.addEventListener("click", () => {
  square.style.backgroundColor = "red";
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "brown";
  });
});
