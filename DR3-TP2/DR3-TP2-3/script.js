// Modificação de Estilo com Clique

// Objetivo: Implementar a mudança de cor, tamanho e espessura da borda
// de um quadrado ao clicar em um botão.
// Requisitos:
// Defina o quadrado com as seguintes regras de CSS:

// width: 100px;
// height: 100px;
// background-color: #F00;
// margin: 20px auto;
// cursor: pointer;
// border: solid 3px #999;

// Ao clicar no botão, o estilo do quadrado deve ser alterado
// (por exemplo, uma nova cor de fundo e borda).

document.getElementById("button").addEventListener("click", () => {
  let square = document.getElementById("square");
  square.style.backgroundColor = "purple";
  square.style.borderColor = "black";
});
