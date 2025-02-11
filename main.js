"use strict";

const botaoTrocarImagem = document.getElementById('trocar-imagem');

const imagens = [
    'url("img/paisagem1.webp")',
    'url("img/paisagem2.png")',
    'url("img/paisagem3.webp")',
    'url("img/paisagem4.jpg")',

];

let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.documentElement.style.setProperty('--fundo-imagem', imagens[indiceAtual]);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);