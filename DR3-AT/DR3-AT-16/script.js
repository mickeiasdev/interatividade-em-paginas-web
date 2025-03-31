// Observe arquivo HTML do formulário e crie uma função que informe se o preenchimento do formulário
// é válido ou inválido. Não altere o arquivo HTML. A correta validação será referente à:

// Nome com mais de 3 caracteres e menos de 10.
// Pelo menos uma área selecionada.
// Retire os caracteres especiais do CPF (. e -) e verifique se possui 11 caracteres.
// Verifique se a data de agendamento possui o símbolo “/”.
// Transforme o endereço em letras minúsculas e verifique se existe a palavra “rua”.
// Link: https://codesandbox.io/p/sandbox/ydhjz8

function validarVazio(valor) {
  if (valor.trim() === "") {
    alert("Invalido! Você digitou um valor vazio.");
    return false;
  }
  return true;
}

function validarTamanho(valor, min = 3, max = 10) {
  if (!validarVazio(valor)) return false;
  if (valor.length < min) {
    alert(`Voce nao atingiu o numero minimo de ${min} caracteres.`);
    return false;
  }
  if (valor.length > max) {
    alert(`Voce ultrapassou o numero maximo de ${max} caracteres.`);
    return false;
  }
  console.log(valor);
  return true;
}

function validarCheck(item1, item2) {
  if (!item1.checked && !item2.checked) {
    alert("Erro! Selecione uma área.");
    return false;
  }
  return true;
}

function corrigirCpf(cpf) {
  if (!validarVazio(cpf)) return false;
  let correcao = cpf.replace(/[.\-]/g, "");

  if (correcao.length !== 11 || !/^\d+$/.test(correcao)) {
    alert("CPF inválido! Digite um CPF com 11 números.");
    cpf.textContent = "";
    return false;
  }
  cpf = correcao;
  console.log(cpf);
  return true;
}

function validarData(data) {
  if (!validarVazio(data)) return false;
  const regex = /^\d{2}[/]\d{2}[/]\d{2}?$/;
  if (!data.includes("/")) {
    alert('A data deve conter uma "/" separando os numeros.');
    return false;
  }
  if (!regex.test(data)) {
    alert("Informe uma data valida! [10/01/23]");
    return false;
  }
  console.log(data);
  return true;
}

function validarRua(valor) {
  if (!validarVazio(valor)) return false;
  valor = valor.toLowerCase();
  const regexRua = /^rua\s.{1,}$/;
  if (!regexRua.test(valor)) {
    alert('Endereco invalido. Inicie o endereco com "rua"');
    return false;
  }
  console.log(valor);
  return true;
}

function validar() {
  const botao = document.getElementById("btnCadastrar");

  botao.addEventListener("click", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const rh = document.getElementById("rh");
    const seguranca = document.getElementById("seguranca");
    const cpf = document.getElementById("cpf").value;
    const data = document.getElementById("data").value;
    const endereco = document.getElementById("endereco").value;

    if (!validarTamanho(nome)) return;
    if (!validarCheck(rh, seguranca)) return;
    if (!corrigirCpf(cpf)) return;
    if (!validarData(data)) return;
    if (!validarRua(endereco)) return;

    document
      .querySelectorAll(
        'input[type="text"], input[type="checkbox"], input[type="date"]'
      )
      .forEach((input) => {
        if (input.type === "checkbox") {
          input.checked = false;
          input.value = "";
        }
      });
      
    alert("Formulario enviado com sucesso!");
  });
}

validar();
