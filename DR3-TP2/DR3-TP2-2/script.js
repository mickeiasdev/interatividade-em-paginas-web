// Alteração de Texto de um Parágrafo com Clique

// Objetivo: Criar uma página web que altere o conteúdo de um parágrafo ao clicar em um botão.
// Requisitos:
// Crie um <p> em HTML com qualquer texto inicial.
// Ao clicar no botão, o texto do parágrafo deve ser substituído por outro.

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("parag").innerHTML =
    "EU DISSE PRA NÃO CLICAR NO BOTÃO!!!";
});
