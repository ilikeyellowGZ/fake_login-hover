const dropdowns = document.querySelectorAll('.dropdown');

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

    //you have to write the surname and password right and at the bottom
    const username = "TheReel911"
    const password = "password"

    const authenticated = authentication(username,password)

    if(authenticated){
        alert("You have authenticated")
    }else{
        login.classList.add('red'); 
        theX.classList.add('red');
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
const fromBtn = document.querySelector ("actual-login")
const loginBtn = document.querySelector (".sign-in")
const logupBtn = document.querySelector (".sign-up")
const registerLink = document.querySelector('.register');
const registerLink1 = document.querySelector('.register1');
const loginBtnD = document.querySelector (".sign-in1")
const logupBtnD = document.querySelector (".sign-up1")
const login = document.querySelector (".wrapper")
const loginTwo = document.querySelector (".wrapper2")
const fakeMain = document.querySelector (".fake-main")
const theX = document.querySelector(".x-forthe-box")

loginBtnD.addEventListener('click', () => {
    login.classList.add('active'); 
    fakeMain.classList.add('active');
});
logupBtnD.addEventListener('click', () => {
    loginTwo.classList.add('active');
    fakeMain.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    login.classList.add('active'); 
    fakeMain.classList.add('active');
});
logupBtn.addEventListener('click', () => {
    loginTwo.classList.add('active');
    fakeMain.classList.add('active');
});

theX.addEventListener('click', () => {
    loginTwo.classList.remove('active');
    fakeMain.classList.remove('active');
    login.classList.remove('active');
    
});

registerLink.addEventListener('click', () => {
    login.classList.remove('active');
    loginTwo.classList.add('active');
});

registerLink1.addEventListener('click', () => {
    login.classList.add('active');
    loginTwo.classList.remove('active');
});



