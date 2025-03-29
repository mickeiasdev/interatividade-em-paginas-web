// Alteração de classes

// Crie no HTML um elemento “h1” contendo o texto “Título” e um elemento “div” de id=”card”. Após isto faça:

// Ao clicar no elemento “div” adicione uma classe “card” à “div”.
// Ao clicar no “h1” faça com que a classe “corVermelha” seja adicionada/removida alternadamente ao clicar neste elemento.

const card = document.getElementById("card");
const h1 = document.querySelector("h1");

card.addEventListener("click", () => {
  card.classList.add("card");
});

h1.addEventListener("click", () => {
  h1.classList.toggle("corVermelha");
});
