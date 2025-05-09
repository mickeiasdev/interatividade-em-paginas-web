// Transformação com Mouse Over

// Objetivo: Criar um efeito visual ao passar o mouse sobre um quadrado.
// Requisitos:
// Crie um quadrado azul usando HTML e CSS.
// Ao passar o mouse sobre o quadrado (evento onMouseOver):
// O quadrado deve se tornar transparente usando rgba.
// Uma imagem oculta atrás do quadrado deve aparecer (use z-index).
// Quando o mouse sair do quadrado, ele deve retornar ao estado original.

const mouseover = () => {
  const square = document.getElementById("square");
  square.style.backgroundColor = "rgb(165, 42, 42, .25)";
  square.style.transition = "0.3s ease-in-out";
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "rgb(165, 42, 42, 1)";
  });
};
