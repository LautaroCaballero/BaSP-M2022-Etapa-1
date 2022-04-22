const submitBtn = document.getElementById('buttonSubmit');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass')
const email = document.getElementById('email');
const form = document.getElementById('login-form');
const password = document.getElementById('password');


email.addEventListener('blur', e =>{
    e.preventDefault();
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var regexPass = /^[a-zA-Z\s]{2,254}/; 
    if (regexEmail.test(email.value)) {
        console.log('');

        if (regexPass.test(password.value)) {
            console.log('')
        }
        else {
            errorPass.style.display ="flex";
        }
    }
    else {
        errorEmail.style.display ="flex";
    }
})
email.addEventListener('focus', e => {
    e.preventDefault();
    errorEmail.style.display ="none";
})

password.addEventListener('focus', e => {
    e.preventDefault();
    errorPass.style.display ="none";
})




