//  Criação de objetos aninhados

// Crie um objeto chamado “escola” que possui as propriedades:
// número de alunos, nome do diretor, ano de fundação e endereço.

// O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

const dados = {
  solicitarEnderecoInstituicao: function () {
    const endereco = {};

    function bairro() {
      while (true) {
        let bairro = prompt(
          "Digite o bairro da instituição: [machado de assis]"
        );

        while (!validacoes.validarCancelar(bairro)) {
          bairro = prompt("Digite o bairro da instituição: [machado de assis]");
        }
        if (
          validacoes.validarVazio(bairro) &&
          validacoes.validarTamanhoMin(bairro)
        ) {
          return validacoes.corrigirNome(bairro);
        }
      }
    }

    function rua() {
      while (true) {
        let rua = prompt(
          "Digite a rua da instituição: [rua carlos drummond de andrade]"
        );
        while (!validacoes.validarCancelar(rua)) {
          rua = prompt(
            "Digite a rua da instituição: [rua carlos drummond de andrade]"
          );
        }
        if (validacoes.validarVazio(rua) && validacoes.validarRua(rua)) {
          return validacoes.corrigirNome(rua);
        }
      }
    }

    function cidade() {
      while (true) {
        let cidade = prompt("Digite a cidade da instituicao: [cascavel]");
        while (!validacoes.validarCancelar(cidade)) {
          cidade = prompt("Digite a cidade da instituicao: [cascavel]");
        }
        if (
          validacoes.validarVazio(cidade) &&
          validacoes.validarTamanhoMin(cidade) &&
          validarStringSemNumero(cidade)
        ) {
          return validacoes.corrigirNome(cidade);
        }
      }
    }

    endereco.bairro = bairro();
    endereco.rua = rua();
    endereco.cidade = cidade();

    return endereco;
  },

  solicitarNumeroDeAlunos: function () {
    let numeroDeAlunos = prompt(
      "Digite a quantidade de alunos da instituição: [764]"
    );

    while (!validacoes.validarCancelar(numeroDeAlunos)) {
      numeroDeAlunos = prompt(
        "Digite a quantidade de alunos da instituição: [764]"
      );
    }
    if (
      validacoes.validarNumero(numeroDeAlunos) &&
      validacoes.validarNumeroInteiroPositivo(numeroDeAlunos)
    ) {
      return numeroDeAlunos;
    } else {
      return this.solicitarNumeroDeAlunos();
    }
  },

  solicitarNomeDiretor: function () {
    let nome = prompt("Digite o nome do diretor: [mickeias]");

    while (!validacoes.validarCancelar(nome)) {
      nome = prompt("Digite o nome do diretor: [mickeias]");
    }
    if (
      validacoes.validarVazio(nome) &&
      validacoes.validarTamanhoMin(nome) &&
      validacoes.validarStringSemNumero(nome)
    ) {
      validacoes.corrigirNome(nome);
      return nome;
    } else {
      return this.solicitarNomeDiretor();
    }
  },

  solicitarAnoFundacao: function () {
    let numero = prompt("Digite o ano de fundacao: [1997]");

    while (!validacoes.validarCancelar(numero)) {
      numero = prompt("Digite o ano de fundacao: [1997]");
    }

    if (
      validacoes.validarVazio(numero) &&
      validacoes.validarNumeroInteiroPositivo(numero) &&
      validacoes.validarAnoAtual(numero)
    ) {
      return numero;
    } else {
      return this.solicitarAnoFundacao();
    }
  },
};

const escola = {};

if ((escola.numeroDeAlunos = dados.solicitarNumeroDeAlunos())) {
  if ((escola.diretor = dados.solicitarNomeDiretor())) {
    if ((escola.anoFundacao = dados.solicitarAnoFundacao())) {
      // objeto de endereco e criado dentro da funcao
      if ((escola.endereco = dados.solicitarEnderecoInstituicao())) {
        alert(`Alunos: ${escola.numeroDeAlunos}
Diretor: ${escola.diretor}
Ano: ${escola.anoFundacao}
                   
Endereco
Rua: ${escola.endereco.rua}
Bairro: ${escola.endereco.bairro}
Cidade: ${escola.endereco.cidade}`);
      }
    }
  }
}
