//eleents
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
var buttonSubmit = document.getElementById('buttonSubmit');
//errorBoxes
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
//modal
var check = [true, true, true, true, true, true, true, true, true, true, true];
var checkBox = document.getElementById('modal');
var modalX = document.getElementById('modalX');
var modalTittle = document.getElementById('modal-tittle');
var modalName = document.getElementById('name-modal')
var modalLname = document.getElementById('lastname-modal');
var modalDni = document.getElementById('dni-modal');
var modalBirth = document.getElementById('birth-modal');
var modalTel = document.getElementById('tel-modal');
var modalAdress = document.getElementById('adress-modal');
var modalCity = document.getElementById('city-modal');
var modalPostal = document.getElementById('postal-modal');
var modalEmail = document.getElementById('email-modal');
var modalPassword = document.getElementById('password-modal');
var modalPasswordR = document.getElementById('passwordr-modal');
var logValidation = document.getElementById('log-validation')
//arrays
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var letterNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var space = " ";

var borderRed = (element) => {
    element.style.border= '1px solid #ff0000'
}

var borderVio = (element) => {
    element.style.border= '1px solid #292a50'
}

function dateFormat(inputDate, format) {
    var date = new Date(inputDate);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();    
    format = format.replace("MM", month.toString().padStart(2,"0"));        
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }
    format = format.replace("dd", day.toString().padStart(2,"0"));
    return format;
}

var calculateAge = (birthValue) => {
    var actualDate = new Date();
    var actualYear = parseInt(actualDate.getFullYear());
    var actualMonth = parseInt(actualDate.getMonth()) + 1;
    var actualDay = parseInt(actualDate.getDate());
    var birthYear = parseInt(String(birthValue).substring(0,4));
    var birthMonth = parseInt(String(birthValue).substring(5,7));
    var birthDay = parseInt(String(birthValue).substring(8,10));

    var age = actualYear-birthYear;
    if(actualMonth < birthMonth) {
        age --;
    }
    else if (actualMonth === birthMonth) {
        if (actualDay < birthDay) {
            age --;
        }
    }
    return age;
}

if (localStorage.getItem('name') != null &&
localStorage.getItem('last name') != null &&
localStorage.getItem('dni') != null &&
localStorage.getItem('date') != null &&
localStorage.getItem('tel') != null &&
localStorage.getItem('address') != null &&
localStorage.getItem('city') != null &&
localStorage.getItem('zip') != null &&
localStorage.getItem('email') != null &&
localStorage.getItem('password') !=null &&
localStorage.getItem('passwordR') !=null) {
    firstName.value = localStorage.getItem('name');
    lastName.value = localStorage.getItem('last name');
    dni.value = localStorage.getItem('dni');
    birth.value = localStorage.getItem('date');
    tel.value = localStorage.getItem('tel');
    adress.value = localStorage.getItem('address');
    city.value = localStorage.getItem('city');
    postalCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    passwordRepeat.value = localStorage.getItem('passwordR');
}

var saveLocal = () => {
    localStorage.setItem("name", firstName.value);
    localStorage.setItem("last name", lastName.value);
    localStorage.setItem("dni", dni.value);
    localStorage.setItem("date", birth.value);
    localStorage.setItem("tel", tel.value);
    localStorage.setItem("address", adress.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("zip", postalCode.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("passwordR", passwordRepeat.value);
}

firstName.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Name';
    error.classList.add('error-submit');
    if(firstName.value.length <=3) {
        errorContainer.appendChild(error);
        borderRed(firstName);
        check[0] = false;
    }
    else {
        for(i of firstName.value) {
            if(!letters.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(firstName);
                check[0] = false;
            }
    }
}
})

firstName.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(firstName);
    check[0] = true;
})

lastName.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong last name';
    error.classList.add('error-submit');
    if(lastName.value.length <=3) {
        errorContainer.appendChild(error);
        borderRed(lastName);
        check[1] = false;
    }
    else {
        for(i of lastName.value) {
            if(!letters.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(lastName);
                check[1] = false;
            }
    }
}
})

lastName.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(lastName);
    check[1] = true;
})

birth.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Date';
    error.classList.add('error-submit');
   
    if (birth.value === "") {
        errorContainer.appendChild(error);
        borderRed(birth);
        check[2] = false;
    }
    else {
        if(calculateAge(birth.value) < 18) {
            errorContainer.appendChild(error);
            borderRed(birth);
            check[2] = false;
        }
    }   
})

birth.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(birth);
    check[2] = true;
})

dni.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong DNI';
    error.classList.add('error-submit');
    if(dni.value.length <=7) {
        errorContainer.appendChild(error);
        borderRed(dni);
        check[3] = false;
    }
    else {
        for(i of dni.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(dni);
                check[3] = false;
            }
        }
    }
})

dni.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(dni);
    check[3] = true;
})

tel.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong tel';
    error.classList.add('error-submit');
    if(tel.value.length !=10) {
        errorContainer.appendChild(error);
        borderRed(tel);
        check[4] = false;
    }
    else {
        for(i of tel.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(tel);
                check[4] = false;
            }
        }
    }
})

tel.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(tel);
    check[4] = true;
})

adress.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Adress';
    error.classList.add('error-submit');
    if(adress.value.length <=4) {
        errorContainer.appendChild(error);
        borderRed(adress);
        check[5] = false;
    }
    else {
        for(i of adress.value) {
            if(!letterNumbers.includes(i) && !space.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(adress);
                check[5] = false;
            }
        }
    }
})

adress.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(adress);
    check[5] = true;
})

city.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong City';
    error.classList.add('error-submit');
    if(city.value.length <=4) {
        errorContainer.appendChild(error);
        borderRed(city);
        check[6] = false;
    }
    else {
        for(i of city.value) {
            if(!letterNumbers.includes(i)&& !space.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(city);
                check[6] = false;
            }
        }
    }
})

city.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(city);
    check[6] = true;
})

postalCode.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong Postal code';
    error.classList.add('error-submit');
    if(postalCode.value.length <= 3 || postalCode.value.length >= 6) {
        errorContainer.appendChild(error);
        borderRed(postalCode);
        check[7] = false;
    }
    else {
        for(i of postalCode.value) {
            if(!numbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(postalCode);
                check[7] = false;
            }
        }
    }
})

postalCode.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(postalCode);
    check[7] = true;
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
        check[8] = false;
    }
})

email.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(email);
    check[8] = true;
})

password.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong password';
    error.classList.add('error-submit');
    if(password.value.length <=8) {
        errorContainer.appendChild(error);
        borderRed(password);
        check[9] = false;
    }
    else {
        for(i of password.value) {
            if(!letterNumbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(password);
                check[9] = false;
            }
        }
    }
})

password.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(password);
    check[9] = true;
})

passwordRepeat.addEventListener('blur', e => {
    e.preventDefault();
    var error = document.createElement('h2');
    error.textContent = 'Wrong password';
    error.classList.add('error-submit');
    if(passwordRepeat.value.length <=8) {
        errorContainer.appendChild(error);
        borderRed(passwordRepeat);
        check[10] = false;
    }
    else if (passwordRepeat.value !== password.value) {
        errorContainer.appendChild(error);
        borderRed(passwordRepeat);
        check[10] = false;
    }
    else {
        for(i of passwordRepeat.value) {
            if(!letterNumbers.includes(i)) {
                errorContainer.appendChild(error);
                borderRed(passwordRepeat);
                check[10] = false;
            }
        }
    }
})

passwordRepeat.addEventListener('focus', e => {
    e.preventDefault();
    errorContainer.innerHTML = ""
    borderVio(passwordRepeat);
    check[10] = true;
})

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstName.value.length == 0){
        borderRed(firstName);
    } else if (dni.value.length == 0){
        borderRed(dni);
    } else if (birth.value.length == 0){
        borderRed(birth);
    } else if (tel.value.length == 0){
        borderRed(tel);
    } else if (adress.value.length == 0){
        borderRed(adress);
    } else if (city.value.length == 0){
        borderRed(city);
    } else if (postalCode.value.length == 0){
        borderRed(postalCode);
    } else if (email.value.length == 0){
        borderRed(email);
    } else if (password.value.length == 0){
        borderRed(password);
    } else if (passwordRepeat.value.length == 0){
        borderRed(passwordRepeat);
    } else {
        modal.style.display = 'block'
        if (check[0] == false){
            modalTittle.textContent = 'Registration failed'
            modalName.textContent = 'Wrong Name';
        }
        else if (check[1] == false) {
            modalTittle.textContent = 'Registration failed'
            modalLname.textContent = 'Wrong last name';
        }
        else if (check[2] == false) {
            modalTittle.textContent = 'Registration failed'
            modalDni.textContent = 'Wrong Dni';
        }
        else if (check[3] == false) {
            modalTittle.textContent = 'Registration failed'
            modalBirth.textContent = 'Wrong birth date';
        }
        else if (check[4] == false) {
            modalTittle.textContent = 'Registration failed'
            modalTel.textContent = 'Wrong telphone number';
        }
        else if (check[5] == false) {
            modalTittle.textContent = 'Registration failed'
            modalAdress.textContent = 'Wrong adress';
        }
        else if (check[6] == false) {
            modalTittle.textContent = 'Registration failed'
            modalCity.textContent = 'Wrong city';
        }
        else if (check[7] == false) {
            modalTittle.textContent = 'Registration failed' 
            modalPostal.textContent = 'Wrong postal code';
        }
        else if (check[8] == false) {
            modalTittle.textContent = 'Registration failed'
            modalEmail.textContent = 'Wrong email';
        }
        else if (check[9] == false) {
            modalTittle.textContent = 'Registration failed'
            modalPassword.textContent = 'Wrong password';
        }
        else if (check[10] == false) {
            modalTittle.textContent = 'Registration failed'
            modalPasswordR.textContent = 'Wrong password';
        }
        else {
            var formattedDate = dateFormat(birth.value, 'MM/dd/yyyy');
            fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${formattedDate}&phone=${tel.value}&address=${adress.value}&city=${city.value}&zip=${postalCode.value}&email=${email.value}&password=${password.value}`)
            .then(response => 
            {if(response.ok) {
            return response.json()} 
            else {throw new Error ('Error en la api')}})
            .then(data => logValidation.textContent = data.msg)
            .catch(error => {
                console.error(error);
            });
            modalTittle.textContent = 'Registration successful'
            modalName.textContent = 'Valid name: ' + firstName.value
            modalLname.textContent = 'Valid last name: ' + lastName.value
            modalDni.textContent = 'Valid dni: ' + dni.value
            modalBirth.textContent = 'Valid birth date: ' + formattedDate;
            modalTel.textContent = 'Valid tel: ' + tel.value
            modalAdress.textContent = 'Valid adress: ' + adress.value
            modalCity.textContent = 'Valid city: ' + city.value
            modalPostal.textContent = 'Valid postal code: ' + postalCode.value
            modalEmail.textContent = 'Valid email: ' + email.value
            modalPassword.textContent = 'Valid password: ' + password.value
            modalPasswordR.textContent = 'Valid password: ' + passwordRepeat.value
            }
            saveLocal();
        }
    })
    
    modalX.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'none';
    })