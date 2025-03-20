// quando o usuario clicar em enviar respostas,
// tenho tenho que pegar o fieldsete e verificar qual input da div .option estar com checked.
// se o input estiver com checked e a classe dele for igual a correct, eu encremento mais
// a variavel score. no final eu mostro o score do usuario em um alerta.

const form = document.querySelector('form');
const options = document.querySelectorAll('.option');
const submit = document.getElementById('submit');
let score = 0;

submit.addEventListener('click', () => {
    options.forEach((option)=>{
        if(option.checked && option.classList.contains("correct")){
            score++;
        }
    })
    alert(`Voce acertou ${score} questoes`);
    score = 0;
    form.reset();
})