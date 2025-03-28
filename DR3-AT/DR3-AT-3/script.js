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

function solicitarContinente(continente) {
  let continente = prompt("Digite o nome do seu continente:");

  while (!validacoes.validarCancelar(continente)) {
    continente = prompt("Digite o nome do seu continente:");
  }
  if (validacoes.validarVazio(continente) && validacoes.validarContinente(continente)) {
    return validacoes.corrigirNome(continente)
  } else {
    return this.solicitarPais()
  }
}

function solicitarPais(continente) {
  let pais = prompt("Digite o nome do seu pais:");

  while (!validacoes.validarCancelar(pais)) {
    pais = prompt("Digite o nome do seu pais:");
  }
  if (validacoes.validarVazio(pais) && validacoes.validarPais(pais)) {
    return validacoes.corrigirNome(pais)
  } else {
    return this.solicitarPais()
  }
}

function solicitarCapital(pais) {
  let capital = prompt("Digite o nome do seu capital:");

  while (!validacoes.validarCancelar(capital)) {
    capital = prompt("Digite o nome do seu capital:");
  }
  if (validacoes.validarVazio(capital) && validacoes.validarCapital(capital)) {
    return validacoes.corrigirNome(capital)
  } else {
    return this.solicitarPais()
  }
}

// const minhaLoc = new localizacao(pais, continete, capital)
