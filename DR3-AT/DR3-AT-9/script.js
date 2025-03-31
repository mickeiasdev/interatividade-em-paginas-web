// Utilizando o onload

// Ao carregar a página utilizando o evento de “onload”,
// adicione um event listener em um input de id “nome.
// Esse event listener será de change e acionará uma função
// chamada “verNome” que irá mostrar o valor que está no input.

window.onload = function() {
  const nome = document.getElementById("nome");
  nome.addEventListener("change", verNome);
};

function verNome(event) {
  alert("Nome: " + event.target.value);
}