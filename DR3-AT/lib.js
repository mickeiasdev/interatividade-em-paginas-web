const validacoes = {
  validarCancelar: function (valor) {
    if (valor === null) {
      const confirmacao = confirm("Você tem certeza que deseja cancelar?");
      if (confirmacao) {
        alert("Programa encerrado.");
        return true;
      } else {
        return false;
      }
    }
    return true;
  },

  validarVazio: function (valor) {
    if (valor.trim() === "") {
      alert("Invalido! Você digitou um valor vazio.");
      return false;
    }
    return true;
  },

  validarTamanhoMin: function (valor, min = 5) {
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
    if (!this.validarNumero(valor)) return false
    valor = Number(valor);
    if (!Number.isInteger(valor)) {
      alert("O programa espera um numero inteiro como entrada.");
      return false;
    }
    return true;
  },

  validarNumeroInteiroPositivo: function (valor) {
    if (!this.validarNumeroInteiro(valor)) return false
    if (valor < 0) {
      alert("O programa espera um numero inteiro positivo como entrada.");
      return false;
    }
    return true;
  },

  validarEmail: function (valor) {
    if(!this.validarVazio(valor)) return false
    // usuario, arroba, dominio, pelomenos dois caracteres para o finalizar
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
    if (!regexEmail.test(valor)) {
      alert("Voce digitou um email invalido.");
      return false;
    }
    valor = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
    return true;
  },

  validarCpf: function(cpf) {
    if(!this.validarVazio(cpf)) return false;
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    if(!regex.test(cpf)) {
      alert("Voce digitou um CPF invalido.")
      return false
    }
    return true
    
  },

  validarRua: function (valor) {
    if(!this.validarVazio(valor)) return false
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
    if(!this.validarVazio(valor)) return false
    this.validarTamanhoMax(valor, 1);
    if (valor !== "m" && valor !== "f") {
      alert("Valor invalido.");
      return false;
    }
    return true;
  },

  validarStringSemNumero: function (nome) {
    if(!this.validarVazio(nome)) return false
    const regex = /\d/; // verificar números (qualquer dígito)

    if (regex.test(nome)) {
      alert("A string não pode conter números.");
      return false;
    } else {
      return true;
    }
  },

  validarAnoAtual: function (ano) {
    const anoAtual = new Date().getFullYear();
    if (ano > anoAtual) {
      alert("Voce nao pode inserir um ano maior que o ano tual.");
      return false;
    } else {
      return true;
    }
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
