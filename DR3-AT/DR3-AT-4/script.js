// Métodos de um objeto

// Crie um objeto “carro” que tenha uma propriedade de modelo, estado, preço base e ano.
// O objeto também deve possuir um método para calcular o valor estimado. Use a propriedade “this”.

// Para calcular o valor estimado utilize o preço base – 1000 para cada ano entre o atual e o ano do carro.

class Carro {
  constructor(modelo, estado, precoBase, ano) {
    this.modelo = modelo;
    this.estado = estado;
    this.precoBase = precoBase;
    this.ano = ano;
  }

  calcular() {
    const anoAtual = new Date().getFullYear();
    alert(`  
      Valor estimado: ${this.precoBase - (anoAtual - this.ano) * 1000}`);
  }
}

function modelo() {
  let resposta = prompt("Digite o modelo do carro:");

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt("Digite o modelo do carro:");
  }

  if (validacoes.validarVazio(resposta)) {
    return validacoes.corrigirNome(resposta);
  } else {
    return modelo();
  }
}

function estado() {
  let resposta = prompt("Digite o estado do carro:");

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt("Digite o estado do carro:");
  }

  if (
    validacoes.validarVazio(resposta) &&
    validacoes.validarStringSemNumero(resposta)
  ) {
    return validacoes.corrigirNome(resposta);
  } else {
    return estado();
  }
}

function precoBase() {
  let resposta = prompt("Digite o preço base do carro:");

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt("Digite o preço base do carro:");
  }

  if (
    validacoes.validarVazio(resposta) &&
    validacoes.validarNumeroInteiroPositivo(resposta)
  ) {
    return validacoes.corrigirNome(resposta);
  } else {
    return precoBase();
  }
}

function ano() {
  let resposta = prompt("Digite o ano do carro:");

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt("Digite o ano do carro:");
  }

  if (
    validacoes.validarVazio(resposta) &&
    validacoes.validarNumeroInteiroPositivo(resposta) &&
    validacoes.validarAnoAtual(resposta)
  ) {
    return validacoes.corrigirNome(resposta);
  } else {
    return ano();
  }
}

let dados = new Carro(modelo(), estado(), precoBase(), ano());

alert(
  `Modelo: ${dados.modelo}\nEstado: ${dados.estado}\nPreco Base: ${dados.precoBase}\nAno: ${dados.ano}`
);

dados.calcular();
