// Eventos e atributos

// Adicione um evento que capture a passagem do mouse por cima dos
// elementos “li” do arquivo HTML. Faça:

// Caso o elemento “li” possua a classe “azul” faça com que este elemento
// ganhe a cor de texto azul, através da aplicação de estilo. 
// Caso o elemento “li” possua a classe “verde” faça com que este elemento
// ganhe a cor de texto verde, através da aplicação de estilo.
// Link: https://codesandbox.io/p/sandbox/q9k24n

const lista = document.querySelector("ul");

lista.addEventListener("click", (e)=> {
  if(e.target.classList.contains("azul"))
    e.target.style.color = "blue"
  if(e.target.classList.contains("verde"))
    e.target.style.color = "green" 
})
