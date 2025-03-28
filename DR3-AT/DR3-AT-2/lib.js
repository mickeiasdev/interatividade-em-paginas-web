const validacoes = {
  validarVazio: function (valor) {
    if (valor.trim() === "") {
      alert("Invalido! Voce digitou um valor vazio.");
      return false;
    }
    return true;
  },

  validarCancelar: function (valor) {
    // Se o valor for null (indicando que o usuário clicou em "Cancelar")
    if (valor === null) {
      const confirmacao = confirm("Você tem certeza que deseja cancelar?");
      if (confirmacao) {
        alert("Programa encerrado.");
        return true; // Se o usuário confirmar que quer cancelar, o programa é interrompido
      } else {
        return false; // Se o usuário não confirmar, continua normalmente
      }
    }
    return true; // Se não for cancelamento, continua normalmente
  },
  validarTamanhoMin: function (valor, min = 3) {
    if (valor.length < min) {
      alert(`Voce nao atingiu o numero minimo de ${min} caracteres`);
      return false;
    }
    return true;
  },

  validarTamanhoMax: function (valor, max = 25) {
    if (valor.length > max) {
      alert(`Voce ultrapassou o numero maximo de ${max} caracteres`);
      return false;
    }
    return true;
  },

  validarNumero: function (valor) {
    if (!this.validarVazio(valor)) return false;
    valor = valor.replace(",", ".");
    if (isNaN(valor)) {
      alert("O programa espera um numero como entrada.");
      return false;
    }
    return true;
  },

  validarNumeroInteiro: function (valor) {
    if (!this.validarNumero(valor)) {
      return false;
    }
    valor = Number(valor);
    if (!Number.isInteger(valor)) {
      alert("O programa espera um numero inteiro como entrada.");
      return false;
    }
    return true;
  },

  validarNumeroInteiroPositivo: function (valor) {
    if (!this.validarNumeroInteiro(valor)) {
      return false;
    }
    if (valor < 0) {
      alert("O programa espera um numero inteiro positivo como entrada.");
      return false;
    }
    return true;
  },

  validarEmail: function (valor) {
    this.validarVazio(valor);
    // usuario, arroba, dominio, pelomenos dois caracteres para o finalizar
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
    if (!regexEmail.test(valor)) {
      alert("Voce digitou um email invalido.");
      return false;
    }
    valor = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
    return true;
  },

  validarRua: function (valor) {
    this.validarVazio(valor);
    // iniciar com "rua" e ter um complemento de plmns 3 caracteres
    const regexRua = /^rua\s.{3,}$/;
    if (!regexRua.test(valor)) {
      alert("Voce digitou uma rua invalida.");
      return false;
    }
    this.corrigirNome(valor);
    return true;
  },

  validarSexo: function (valor) {
    this.validarVazio(valor);
    this.validarTamanhoMax(valor, 1);
    if (valor !== "m" && valor !== "f") {
      alert("Valor invalido.");
      return false;
    }
    return true;
  },

  corrigirNome: function (nome) {
    // Isso faz com que qualquer quantidade de espaços seguidos seja considerada como um único separador.
    const nomes = nome
      .trim()
      .split(/\s+/)
      .map((item) => item.trim());

    let nomesCorrigidos = nomes.map((item, i) => {
      if (
        ["da", "de", "do", "das", "dos"].includes(item.toLowerCase()) &&
        i !== 0
      ) {
        return item.toLowerCase();
      } else {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      }
    });
    return nomesCorrigidos.join(" ");
  },
};

//-----------------------------------------------------------------------------------------------------------

const entradas = {
  solicitarNome: function () {
    const nome = prompt("Digite seu nome e sobrenome: [mickeias coelho]");

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
    const idade = prompt("Digite sua idade: [21]");

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
    const email = prompt("Digite seu email: [exemplo@dominio.com]");

    while (!validacoes.validarCancelar(email)) {
      email = prompt("Digite seu email: [exemplo@dominio.com]");
    }
    if (validacoes.validarVazio(email) && validacoes.validarEmail(email)) {
      email.charAt(0).toLocaleUpperCase();
      return email;
    } else {
      return this.solicitarEmail();
    }
  },

  solicitarSexo: function () {
    const sexo = prompt("Digite seu sexo: [M/F]").toUpperCase();

    while (!validacoes.validarCancelar(sexo)) {
      sexo = prompt("Digite seu sexo: [M/F]").toUpperCase();
    }
    if (validacoes.validarVazio(sexo) && validacoes.validarSexo(sexo)) {
      return sexo;
    } else {
      return this.solicitarSexo();
    }
  },

  solicitarEnderecoInstituicao: function () {
    const endereco = {
      bairro: "",
      rua: "",
      cidade: "",
    };

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
          validacoes.validarTamanhoMin(cidade)
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
    if (validacoes.validarNumero(numeroDeAlunos)) {
      return numeroDeAlunos;
    } else {
      return this.solicitarNumeroDeAlunos();
    }
  },

  solicitarNomeDiretor: function () {
    let nome = prompt("Digite o nome do diretor: [mickeias coelho]");

    while (!validacoes.validarCancelar(nome)) {
      nome = prompt("Digite o nome do diretor: [mickeias coelho]");
    }
    if (validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
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
    if (validacoes.validarVazio(numero) && validacoes.validarNumero(numero)) {
      return numero;
    } else {
      return this.solicitarAnoFundacao();
    }
  },

  solicitarContinente: function () {
    let continente = prompt("Digite o nome do seu continente:");

    while (!validacoes.validarCancelar(continente)) {
      continente = prompt("Digite o nome do seu continente:");
    }
    if (validacoes.validarVazio(continente)) {
      return validacoes.corrigirNome(continente);
    } else {
      return this.solicitarContinente();
    }
  },

  solicitarPais: function () {
    let pais = prompt("Digite o nome do seu pais:");

    while (!validacoes.validarCancelar(pais)) {
      pais = prompt("Digite o nome do seu pais:");
    }
    if (validacoes.validarVazio(pais)) {
      return validacoes.corrigirNome(pais);
    } else {
      return this.solicitarPais();
    }
  },

  solicitarCapital: function () {
    let capital = prompt("Digite o nome do seu capital:");

    while (!validacoes.validarCancelar(capital)) {
      capital = prompt("Digite o nome do seu capital:");
    }
    if (validacoes.validarVazio(capital)) {
      return validacoes.corrigirNome(capital);
    } else {
      return this.solicitarCapital();
    }
  },
};
