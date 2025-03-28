// Métodos de um objeto

// Crie um objeto “carro” que tenha uma propriedade de modelo, estado, preço base e ano.
// O objeto também deve possuir um método para calcular o valor estimado. Use a propriedade “this”.

// Para calcular o valor estimado utilize o preço base – 1000 para cada ano entre o atual e o ano do carro.

class carro {
  constructor(modelo, estado, precoBase, ano) {
    this.modelo = modelo;
    this.estado = estado;
    this.precoBase = precoBase;
    this.ano = ano;
  }

  calcular() {
    alert(`Valor estimado: ${parseFloat(this.precoBase) - 1000}`);
  }
}

// fazer as solicitacoes separadas

const mensagemModelo = "Digite o modelo do carro:";
const mensagemEstado = "Digite o estado do carro:";
const mensagemPrecoBase = "Digite o preço base do carro:";
const mensagemAno = "Digite o ano do carro:";

function solicitarTxt(mensagem) {
  let resposta = prompt(mensagem);

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt(mensagem);
  }

  if (validacoes.validarVazio(resposta)) {
    return validacoes.corrigirNome(resposta);
  } else {
    return solicitarTxt(mensagem);
  }
}

function solicitarNum(mensagem) {
  let resposta = prompt(mensagem);

  while (!validacoes.validarCancelar(resposta)) {
    resposta = prompt(mensagem);
  }

  if (
    validacoes.validarVazio(resposta) &&
    validacoes.validarNumeroInteiroPositivo(resposta)
  ) {
    return validacoes.corrigirNome(resposta);
  } else {
    return solicitarNum(mensagem);
  }
}

const modelo = solicitarTxt(mensagemModelo);
if (modelo) {
  const estado = solicitarTxt(mensagemEstado);
  if (estado) {
    const precoBase = solicitarNum(mensagemPrecoBase);
    if (precoBase) {
      const ano = solicitarNum(mensagemAno);
      if (ano) {
        const dados = new carro(modelo, estado, precoBase, ano);
        alert(
          `Modelo: ${dados.modelo}\nEstado: ${dados.estado}\nPreco Base: ${dados.precoBase}\nAno: ${dados.ano}`
        );
        dados.calcular();
      }
    }
  }
}
