const submitBtn = document.getElementById('buttonSubmit');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass')
const email = document.getElementById('email');
const form = document.getElementById('login-form');
const password = document.getElementById('password');
const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

email.addEventListener('blur', e =>{
    e.preventDefault();
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email.value)) {
        errorEmail.style.display ="flex";
    }
})
email.addEventListener('focus', e => {
    e.preventDefault();
    errorEmail.style.display ="none";
})

password.addEventListener('blur', e => {
    e.preventDefault();
    if(password.value.length <=8) {
        errorPass.style.display ="flex";
    }
    else {
        for(i of password.value) {
            if(!letterNumbers.includes(i)) {
                errorPass.style.display ="flex";
            }
        }
    }
})
password.addEventListener('focus', e => {
    e.preventDefault();
    errorPass.style.display ="none";
})


