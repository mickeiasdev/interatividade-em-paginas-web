// Função construtora

// Pergunte ao usuário o nome do seu país, continente e sua capital.
// Através de uma função construtora crie um objeto chamado “Pais”
// que tenha essas propriedades e defina o valor das propriedades
// conforme os valores digitados pelo usuário.

function localizacao(continente, pais, capital) {
  this.continente = continente;
  this.pais = pais;
  this.capital = capital;
}

dados = new localizacao(entradas.solicitarContinente(), entradas.solicitarPais(), entradas.solicitarCapital())

if(dados){
  alert(`Continente: ${dados.continente}\nPais: ${dados.pais}\nCapital: ${dados.capital}`)
} else {
  alert(dados)
}
