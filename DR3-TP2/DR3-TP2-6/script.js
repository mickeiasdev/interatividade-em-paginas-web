//  Exibição de Imagem ao Carregar a Página (onload)

// Objetivo: Exibir uma imagem e uma mensagem ao carregar a página.
// Requisitos:
// Ao carregar a página, exiba uma foto qualquer e um parágrafo com a mensagem "Imagem carregando...".

window.onload = () => {
  setInterval(() => {
    document.getElementById("p").innerHTML = "Imagem carregada!";
    document.getElementById("img").style.display = "block";
  }, 1000);
};
