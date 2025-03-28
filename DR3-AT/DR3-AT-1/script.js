// Criação de objeto simples

// Pergunte ao usuário seu nome, idade, e-mail e sexo.
// Crie um objeto chamado Pessoa que tenha essas propriedades
// e defina o valor das propriedades conforme os valores digitados pelo usuário.

const dados = {
  solicitarNome: function () {
    let nome = prompt("Digite seu nome e sobrenome: [mickeias coelho]");

    while (!validacoes.validarCancelar(nome)) {
      nome = prompt("Digite seu nome e sobrenome: [mickeias coelho]");
    }
    if (validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
      return validacoes.corrigirNome(nome);
    } else {
      return this.solicitarNome();
    }
  },

  solicitarIdade: function () {
    let idade = prompt("Digite sua idade: [21]");

    while (!validacoes.validarCancelar(idade)) {
      idade = prompt("Digite sua idade: [21]");
    }
    if (
      validacoes.validarVazio(idade) &&
      validacoes.validarNumeroInteiroPositivo(idade)
    ) {
      return idade;
    } else {
      return this.solicitarIdade();
    }
  },

  solicitarEmail: function () {
    let email = prompt("Digite seu email: [exemplo@dominio.com]");

    while (!validacoes.validarCancelar(email)) {
      email = prompt("Digite seu email: [exemplo@dominio.com]");
    }
    if (validacoes.validarVazio(email) && validacoes.validarEmail(email)) {
      email = email.charAt(0).toUpperCase() + email.slice(1).toLowerCase();
      return email;
    } else {
      return this.solicitarEmail();
    }
  },

  solicitarSexo: function () {
    let sexo = prompt("Digite seu sexo: [M/F]");

    while (!validacoes.validarCancelar(sexo)) {
      sexo = prompt("Digite seu sexo: [M/F]");
    }
    if (validacoes.validarVazio(sexo) && validacoes.validarSexo(sexo)) {
      sexo = sexo.toUpperCase();
      return sexo;
    } else {
      return this.solicitarSexo();
    }
  },
};

const pessoa = {};

if ((pessoa.nome = dados.solicitarNome())) {
  if ((pessoa.idade = dados.solicitarIdade())) {
    if ((pessoa.email = dados.solicitarEmail())) {
      if ((pessoa.sexo = dados.solicitarSexo())) {
        alert(`
Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Email: ${pessoa.email}
Sexo: ${pessoa.sexo}`);
      }
    }
  }
}
