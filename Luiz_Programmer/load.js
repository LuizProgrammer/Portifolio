// ações do progress bar
const html = document.querySelector(".value_html");
const css = document.querySelector(".value_css");
const script = document.querySelector(".value_script");

const read = document.querySelector(".value_read");
const write = document.querySelector(".value_write");
const listen = document.querySelector(".value_listen");

let h = 0;
let c = 0;
let j = 0;

let r = 0;
let w = 0;
let l = 0;

setInterval(() => {
    h == 65 ? clearInterval() : dev(1, 0, 0);
    c == 73 ? clearInterval() : dev(0, 1, 0);
    j == 78 ? clearInterval() : dev(0, 0, 1);

    r == 79 ? clearInterval() : ing(1, 0, 0);
    w == 65 ? clearInterval() : ing(0, 1, 0);
    l == 45 ? clearInterval() : ing(0, 0, 1);
}, 20);

let dev = (x,y,z) => {
    h += x;
    c += y;
    j += z;

    document.querySelector(".html").style = "--p:" + h;
    document.querySelector(".css").style = "--p:" + c;
    document.querySelector(".script").style = "--p:" + j;

    html.innerText = h;
    css.innerText = c;
    script.innerText = j;
}
let ing = (x,y,z) => {
    r += x;
    w += y;
    l += z;

    document.querySelector(".read").style = "--p:" + r;
    document.querySelector(".write").style = "--p:" + w;
    document.querySelector(".listen").style = "--p:" + l;

    read.innerText = r;
    write.innerText = w;
    listen.innerText = l;
}
// ações do progress bar

// idade
const ano_atual = new Date().getFullYear();
const ano_aniversario = "1997";

const tagIdade = document.querySelector(".age");
const idade = (ano_atual - ano_aniversario);
tagIdade.innerText = idade;
// idade
