//  Criação de objetos aninhados

// Crie um objeto chamado “escola” que possui as propriedades:
// número de alunos, nome do diretor, ano de fundação e endereço.

// O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

const escola = {
  numeroDeAlunos: null,
  diretor: null,
  anoFundacao: null,
  endereco: null,
};

if ((escola.numeroDeAlunos = entradas.solicitarNumeroDeAlunos())) {
  if ((escola.diretor = entradas.solicitarNomeDiretor())) {
    if ((escola.anoFundacao = entradas.solicitarAnoFundacao())) {
      // objeto de endereco e criado dentro da funcao
      if ((escola.endereco = entradas.solicitarEnderecoInstituicao())) {
        console.log(`Alunos: ${escola.numeroDeAlunos}
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
