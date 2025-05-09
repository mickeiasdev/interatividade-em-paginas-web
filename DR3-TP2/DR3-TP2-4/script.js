// Contador Numérico

// Objetivo: Criar um contador que incremente um número cada vez que um botão for clicado.
// Requisitos:
// Ao clicar no botão, o número exibido deve aumentar em 1 unidade.

let n = 0;

document.getElementById("button").addEventListener("click", () => {
  let counter = document.getElementById("counter");
  n++;
  counter.innerHTML = n;
});
