const dropdowns = document.querySelectorAll('.dropdown');
const close = document.querySelector('.close');;
const body = document.querySelector('body')

dropdowns.forEach(dropdown => {
    const select = document.querySelector ('.top-part');
    const caret = document.querySelector ('i');
    const menu = document.querySelector ('.bottom-part');
    
    

    select.addEventListener ('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('i-rotate');
        menu.classList.toggle('bottom-part-on');
    }); 
});
