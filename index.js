const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu-lateral--ativo');
});

let botaoResumo = document.querySelector(".botao-resumo");
let resumo = document.querySelector(".resumo__texto-oculto");


botaoResumo.addEventListener('click',()=>{
    resumo.classList.remove('desativar',);
    var pai = botaoResumo.parentNode;
    pai.removeChild(botaoResumo);
});



