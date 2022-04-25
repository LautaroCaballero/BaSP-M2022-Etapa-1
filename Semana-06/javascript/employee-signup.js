var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var dni = document.getElementById('dni');
var birth = document.getElementById('birth-date');
var tel = document.getElementById('tel');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var postalCode = document.getElementById('postal-code');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordRepeat = document.getElementById('password-repeat');
var errorFname = document.getElementById('error-fname');
var errorEmail = document.getElementById('error-email');
var errorLname = document.getElementById('error-lname');
var errorDni = document.getElementById('error-dni');
var errorTel = document.getElementById('error-tel');
var errorAdress = document.getElementById('error-adress');
var errorCity = document.getElementById('error-city');
var errorPostal = document.getElementById('error-postal');
var errorPass = document.getElementById('error-pass');
var errorContainer = document.getElementById('error-container');
var input = document.getElementById('input-text');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const space = " "

var borderRed = (element) => {
    element.style.border= '1px solid #ff0000'
}

var borderVio = (element) => {
    element.style.border= '1px solid #292a50'
}

firstName.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Name';
    error.classList.add('error-submit');
    if(firstName.value.length <=3) {
        errorContainer.appendChild(error);
        borderRed(firstName);
    }
    else {
        for(i of firstName.value) {
            if(!letters.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(firstName);
            }
    }
}
})

firstName.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(firstName);
})

lastName.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong last name';
    error.classList.add('error-submit');
    if(lastName.value.length <=3) {
        errorContainer.appendChild(error);
        borderRed(lastName);
    }
    else {
        for(i of lastName.value) {
            if(!letters.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(lastName);
            }
    }
}
})
lastName.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(lastName);
})

dni.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong DNI';
    error.classList.add('error-submit');
    if(dni.value.length <=7) {
        errorContainer.appendChild(error);
        borderRed(dni);
    }
    else {
        for(i of dni.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(dni);
            }
        }
    }
})
dni.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(dni);
})

tel.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong tel';
    error.classList.add('error-submit');
    if(tel.value.length !=10) {
        errorContainer.appendChild(error);
        borderRed(tel);
    }
    else {
        for(i of tel.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(tel);
            }
        }
    }
})
tel.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(tel);
})

adress.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Adress';
    error.classList.add('error-submit');
    if(adress.value.length <=4) {
        errorContainer.appendChild(error);
        borderRed(adress);
    }
    else {
        for(i of adress.value) {
            if(!letterNumbers.includes(i) && !space.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(adress);
            }
        }
    }
})
adress.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(adress);
})

city.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong City';
    error.classList.add('error-submit');
    if(city.value.length <=4) {
        errorContainer.appendChild(error);
        borderRed(city);
    }
    else {
        for(i of city.value) {
            if(!letterNumbers.includes(i)&& !space.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(city);
            }
        }
    }
})
city.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(city);
})

postalCode.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Postal code';
    error.classList.add('error-submit');
    if(postalCode.value.length <= 3 || postalCode.value.length >= 6) {
        errorContainer.appendChild(error);
        borderRed(postalCode);
    }
    else {
        for(i of postalCode.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(postalCode);
            }
        }
    }
})
postalCode.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(postalCode);
})

email.addEventListener('blur', e =>{
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Email';
    error.classList.add('error-submit');
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email.value)) {
        errorContainer.appendChild(error);
        borderRed(email);
    }
})
email.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(email);
})

password.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong password';
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

passwordRepeat.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong password';
    error.classList.add('error-submit');
    if(passwordRepeat.value.length <=8) {
        errorContainer.appendChild(error);
        borderRed(passwordRepeat);
    }
    else {
        for(i of passwordRepeat.value) {
            if(!letterNumbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(passwordRepeat);
            }
        }
    }
})
passwordRepeat.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(passwordRepeat);
})