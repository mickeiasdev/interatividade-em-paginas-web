// Função construtora

// Pergunte ao usuário o nome do seu país, continente e sua capital.
// Através de uma função construtora crie um objeto chamado “Pais”
// que tenha essas propriedades e defina o valor das propriedades
// conforme os valores digitados pelo usuário.

function localizacao(pais, continente, capital) {
  this.pais = pais;
  this.continente = continente;
  this.capital = capital;
}

// const minhaLoc = new localizacao(pais, continete, capital)
