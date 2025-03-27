// Criação de objeto simples

// Pergunte ao usuário seu nome, idade, e-mail e sexo.
// Crie um objeto chamado Pessoa que tenha essas propriedades
// e defina o valor das propriedades conforme os valores digitados pelo usuário.

const pessoa = {
  nome: null,
  idade: null,
  email: null,
  sexo: null,
};

if ((pessoa.nome = entradas.solicitarNome())) {
  if ((pessoa.idade = entradas.solicitarIdade())) {
    if ((pessoa.email = entradas.solicitarEmail())) {
      if ((pessoa.sexo = entradas.solicitarSexo())) {
        alert(`
Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Email: ${pessoa.email}
Sexo: ${pessoa.sexo}`);
      }
    }
  }
}
