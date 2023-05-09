const dropdowns = document.querySelectorAll('.dropdown');
const close = document.querySelector('.close');;
const body = document.querySelector('body')


dropdowns.forEach(dropdown => {
    const select = document.querySelector ('.top-part');
    const caret = document.querySelector ('i');
    const menu = document.querySelector ('.bottom-part');
    
    

    select.addEventListener ('click', () => {
        select.classList.toggle('top-part-clicked');
        caret.classList.toggle('i-rotate');
        menu.classList.toggle('bottom-part-on');
    }); 
    document.addEventListener("click", function(event) {
        // If user clicks inside the element, do nothing
        if (event.target.closest(".dropdown")) return
        // If user clicks outside the element, hide it!
        select.classList.remove('top-part-clicked');
        caret.classList.remove('i-rotate');
        menu.classList.remove('bottom-part-on');
      })
});

const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = "TheReal911"
    const password = "password"

    const authenticated = authentication(username,password)

    if(authenticated){
        alert("You have authenticated")
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "TheReal911" && password === "password"){
        return true
    }else{
        return false
    }
}
