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
var errorPass = document.getElementById('error-pass')
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const space = " "


firstName.addEventListener('blur', e => {
    e.preventDefault();
    if(firstName.value.length <=3) {
        errorFname.style.display ="flex";
    }
    else {
        for(i of firstName.value) {
            if(!letters.includes(i)) {
                errorFname.style.display ="flex";
            }
    }
}
})

firstName.addEventListener('focus', e => {
    e.preventDefault();
    errorFname.style.display ="none";
})

lastName.addEventListener('blur', e => {
    e.preventDefault();
    if(lastName.value.length <=3) {
        errorLname.style.display ="flex";
    }
    else {
        for(i of lastName.value) {
            if(!letters.includes(i)) {
                errorLname.style.display ="flex";
            }
    }
}
})
lastName.addEventListener('focus', e => {
    e.preventDefault();
    errorLname.style.display ="none";
})

dni.addEventListener('blur', e => {
    e.preventDefault();
    if(dni.value.length <=7) {
        errorDni.style.display ="flex";
    }
    else {
        for(i of dni.value) {
            if(!numbers.includes(i)) {
                errorDni.style.display ="flex";
            }
        }
    }
})
dni.addEventListener('focus', e => {
    e.preventDefault();
    errorDni.style.display ="none";
})

tel.addEventListener('blur', e => {
    e.preventDefault();
    if(tel.value.length !=10) {
        errorTel.style.display ="flex";
    }
    else {
        for(i of tel.value) {
            if(!numbers.includes(i)) {
                errorTel.style.display ="flex";
            }
        }
    }
})
tel.addEventListener('focus', e => {
    e.preventDefault();
    errorTel.style.display ="none";
})

adress.addEventListener('blur', e => {
    e.preventDefault();
    if(adress.value.length <=4) {
        errorAdress.style.display ="flex";
    }
    else {
        for(i of adress.value) {
            if(!letterNumbers.includes(i) && !space.includes(i)) {
                errorAdress.style.display ="flex";
            }
        }
    }
})
adress.addEventListener('focus', e => {
    e.preventDefault();
    errorAdress.style.display ="none";
})

city.addEventListener('blur', e => {
    e.preventDefault();
    if(city.value.length <=4) {
        errorCity.style.display ="flex";
    }
    else {
        for(i of city.value) {
            if(!letterNumbers.includes(i)&& !space.includes(i)) {
                errorCity.style.display ="flex";
            }
        }
    }
})
city.addEventListener('focus', e => {
    e.preventDefault();
    errorCity.style.display ="none";
})

postalCode.addEventListener('blur', e => {
    e.preventDefault();
    if(postalCode.value.length <= 3 || postalCode.value.length >= 6) {
        errorPostal.style.display ="flex";
    }
    else {
        for(i of postalCode.value) {
            if(!numbers.includes(i)) {
                errorPostal.style.display ="flex";
            }
        }
    }
})
postalCode.addEventListener('focus', e => {
    e.preventDefault();
    errorPostal.style.display ="none";
})

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

passwordRepeat.addEventListener('blur', e => {
    e.preventDefault();
    if(passwordRepeat.value.length <=8) {
        errorPass.style.display ="flex";
    }
    else {
        for(i of passwordRepeat.value) {
            if(!letterNumbers.includes(i)) {
                errorPass.style.display ="flex";
            }
        }
    }
})
passwordRepeat.addEventListener('focus', e => {
    e.preventDefault();
    errorPass.style.display ="none";
})