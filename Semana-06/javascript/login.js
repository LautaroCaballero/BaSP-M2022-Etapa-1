var errorContainer = document.getElementById('error-container');
const submitBtn = document.getElementById('buttonSubmit');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass')
const email = document.getElementById('email');
const form = document.getElementById('login-form');
const password = document.getElementById('password');
const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const errorDiv = document.createElement('div');

var borderRed = (element) => {
    element.style.borderBottom = '1px solid #ff0000'
}

var borderVio = (element) => {
    element.style.borderBottom = '1px solid #292a50'
}

email.addEventListener('blur', e =>{
    e.preventDefault();
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email.value)) {   
        var error = document.createElement('h2');
        error.textContent = 'Wrong email';
        error.classList.add('error-submit');
        errorContainer.appendChild(error);
        borderRed(email);
    }
})
email.addEventListener('focus', e => {
    e.preventDefault();
    console.log("XD")
    errorContainer.innerHTML = ""
    borderVio(email);
})

password.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Password';
    error.classList.add('error-submit');

    if(password.value.length <=8) {
        errorContainer.appendChild(error);
        borderRed(password);
    }
    else {
        for(i of password.value) {
            if(!letterNumbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(password);
            }
        }
    }
})
password.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(password);
})


