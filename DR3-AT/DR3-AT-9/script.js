// Manipulação de elementos

// Ao clicar em um elemento “ul” de id=”lista”, selecione os elementos “li” descendentes deste elemento “ul’
// que possuam a classe “pais” e, a cada clique no elemento “ul”, faça a ação de ativar/desativar
// a classe “selecionado” dos descendentes selecionados. Além disso, se algum descendente possui o conteúdo “Brasil”,
// pinte a cor de fundo deste descendente de verde.

// Obs: Pode criar a lista para teste no HTML. Pode criar as classes para te ajudar a verificar a solução.

const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
  const li = event.target; // Captura o item clicado

  if (li.classList.contains("pais")) {
    li.classList.toggle("selecionado");

    if (li.textContent.trim().toLowerCase() === "brasil") {
      li.classList.toggle("verde");
    }
  }
});
