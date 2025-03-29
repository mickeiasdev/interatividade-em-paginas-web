// Observe o arquivo HTML. Sem modificar este HTML e utilizando event listener faça:

// Ao clicar no elemento “li” de id=”brasil” o conteúdo desta “li” será copiado para
// o conteúdo do elemento “span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, verde de 1px.
// Ao clicar no elemento “li” de id=”argentina” o conteúdo desta “li” será copiado
// para o conteúdo do elemento “span” de id=”escolhido” e nesse “span” será adicionada uma borda sólida, azul de 1px.
// Link: https://codesandbox.io/p/sandbox/y3fy4t

const span = document.getElementById("escolhido");
const brasil = document.getElementById("brasil");
const argentina = document.getElementById("argentina");

brasil.addEventListener("click", () => {
  span.textContent = brasil.textContent
  span.style.border = "solid 1px green"
});

argentina.addEventListener("click", () => {
  span.textContent = argentina.textContent
  span.style.border = "solid 1px blue"
});
