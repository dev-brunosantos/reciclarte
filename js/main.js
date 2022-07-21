const barraMenu = document.querySelector('.barra-de-menu');

barraMenu.addEventListener('click', ()=>{
    var menuPrincipal = document.querySelector('.cabecalho__menu');

    menuPrincipal.classList.toggle('abrir__menu');
});