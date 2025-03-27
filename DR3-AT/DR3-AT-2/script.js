//  Criação de objetos aninhados 

// Crie um objeto chamado “escola” que possui as propriedades:
// número de alunos, nome do diretor, ano de fundação e endereço. 

// O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

const escola = {}

const numeroDeAlunos = entradas.solicitarNumeroDeAlunos()
if(numeroDeAlunos) escola.numeroDeAlunos = numeroDeAlunos;

const nomeDiretor = entradas.solicitarNomeDiretor()
if(nomeDiretor) escola.nomeDiretor = nomeDiretor

const anoFundacao = entradas.solicitarAnoFundacao()
if(anoFundacao) escola.anoFundacao = anoFundacao

const endereco = entradas.solicitarEnderecoInstituicao()
if(endereco) escola.endereco = endereco

console.log(`
Alunos: ${escola.numeroDeAlunos}
Diretor: ${escola.diretor}
Ano: ${escola.anoFundacao}
   
Endereco
Rua: ${escola.endereco.rua}
Bairro: ${escola.endereco.bairro}
Cidade: ${escola.endereco.cidade}`)