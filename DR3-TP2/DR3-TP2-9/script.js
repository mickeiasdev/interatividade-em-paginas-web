// Botão com Múltiplos Eventos

// Objetivo: Implementar múltiplos eventos em um único botão.
// Requisitos:
// Ao clicar uma vez, exiba uma mensagem qualquer.
// Ao dar um duplo clique, mude a cor de fundo do botão.

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("p").innerHTML = "To brincando, véi";
});

document.getElementById("button").addEventListener("dblclick", () => {
  document.getElementById("body").style.backgroundColor = "brown";
  document.getElementById("body").style.color = "white";
});
