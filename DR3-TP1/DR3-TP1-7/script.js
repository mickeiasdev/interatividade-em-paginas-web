// No arquivo script.js, siga as etapas abaixo:

// Remova a propriedade `ano de fundação`, do objeto “colegio" criado nos exercícios anteriores, através da remoção de propriedade.
// Não recrie o objeto sem a propriedade. O objeto inicialmente terá tudo o que foi feito nos exercícios anteriores. Remova através de codificação.
// 8 Utilizando a palavra reservada “this”

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

delete colegio.ano;

console.log(colegio);

colegio.obterDiretor();
