const submitBtn = document.getElementById('buttonSubmit');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass')
const email = document.getElementById('email');
const form = document.getElementById('login-form');
const password = document.getElementById('password');


submitBtn.addEventListener('click', e => {
    e.preventDefault();
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var regexPass = /^[a-zA-Z\s]{2,254}/; 

    if (regexEmail.test(email.value)) {
        console.log('la reonchca demtuamdare');

        if (regexPass.test(password.value)) {
            console.log('la reonchca demtuamdare')
        }
        else {
            errorPass.style.display ="flex";
            password.focus();
        }
    }
    else {
        errorEmail.style.display ="flex";
        email.focus();
    }
    
})

errorEmail.addEventListener('click', e => {
    e.preventDefault();
    errorEmail.style.display ="none";
})

errorPass.addEventListener('click', e => {
    e.preventDefault();
    errorPass.style.display ="none";
})




