const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu-lateral--ativo');
});

let botaoResumo = document.querySelector(".botao-resumo");
let resumo = document.querySelector(".resumo__texto-oculto");
let desativar = document.querySelector("desativar");

botaoResumo.addEventListener('click',()=>{
    resumo.classList.toggle('desativar');
});

if(desativar.style.display === "none"){
    botaoResumo.innerHTML="ver mais";
}else{
    botaoResumo.innerHTML="ver menos";
}



