// No arquivo script.js, continuando o que foi feito no exercício anterior, siga as etapas abaixo:

// Adicione um método chamado “obterDiretor” que, ao ser chamado, mostra o nome do `diretor` do colégio.
// Chame o método “obterDiretor” a partir do objeto.

let nomeColegio = "Infnet";
let anoFundacaoColegio = 1989;

let colegio = {
  colegio: nomeColegio,
  ano: anoFundacaoColegio,
  obterDiretor() {
    alert(`Olá, eu sou o diretor ${colegio.nomeDiretor}`);
  },
};

console.log(colegio);

colegio.nomeDiretor = "Marcelo";
colegio.nomeAluno = "Mickeias";
colegio.telefone = 40028922;

console.log(colegio);

colegio.obterDiretor();
