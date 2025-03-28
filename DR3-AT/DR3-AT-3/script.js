// Função construtora

// Pergunte ao usuário o nome do seu país, continente e sua capital.
// Através de uma função construtora crie um objeto chamado “Pais”
// que tenha essas propriedades e defina o valor das propriedades
// conforme os valores digitados pelo usuário.

class localizacao {
  constructor(continente, pais, capital) {
    this.continente = continente;
    this.pais = pais;
    this.capital = capital;
  }
}

const mensagemContinente = "Digite o seu continente"
const mensagemPais = "Digite o seu pais"
const mensagemCapital = "Digite sua capital"

function solicitar(mensagem) {
    let resposta = prompt(mensagem)
    
    while(!validacoes.validarCancelar(resposta)){
      resposta = prompt(mensagem)
    }

    if(validacoes.validarVazio(resposta) &&
      validacoes.validarTamanhoMin(resposta, 4) &&
      validacoes.validarStringSemNumero(resposta)) {
      return validacoes.corrigirNome(resposta)
    } else {
      return solicitar(mensagem)
    }
  }
  
  const continente = solicitar(mensagemContinente)
  if(continente){
    const pais = solicitar(mensagemPais)
    if(pais){
      const capital = solicitar(mensagemCapital)
      if(capital){
        const dados = new localizacao(continente, pais, capital)
        alert(`Continente: ${dados.continente}\nPais: ${dados.pais}\nCapital: ${dados.capital}`)
      }
    }
  }
