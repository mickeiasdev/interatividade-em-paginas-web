//  Texto Exibido com Atraso (onload)

// Objetivo: Exibir um parágrafo 5 segundos após o carregamento da página.
// Requisitos:
// Utilize JavaScript para implementar um atraso de 5 segundos antes de exibir o texto.

setTimeout(() => {
  document.getElementById("p").style.display = "block";
}, 5000);
