

const ano_atual = new Date().getFullYear();
const ano_aniversario = "1997";

const tagIdade = document.querySelector("#age");
const idade = (ano_atual - ano_aniversario);
tagIdade.innerText = idade;
