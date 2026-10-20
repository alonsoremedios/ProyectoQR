const btnTema = document.querySelector('#btn-tema');

btnTema.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        btnTema.textContent = 'Modo claro' ;
    } else {
        btnTema.textContent = 'Modo oscuro' ;
    }
});