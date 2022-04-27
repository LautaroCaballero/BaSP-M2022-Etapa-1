console.log('Functions');

// Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
// variable en la consola del navegador.

console.log('-Exercise 6.a: ');
var firstNumber6A = 160;
var secondNumber6A = 151;
var result;

function addition6A(numberA, numberB) {
    validateDecimal(numberA, numberB)
    result = numberA + numberB;
    return result; 
}

addition6A(firstNumber6A,secondNumber6A);
console.log(result); 

// A la función suma anterior, agregarle una validación para controlar si alguno de los 
// parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error 
// y retornar el valor NaN como resultado.

console.log('-Exercise 6.b: ');
function validation6B (firstNumber6B, secondNumber6B) {
    if (isNaN(firstNumber6B) || isNaN(secondNumber6B)) {
        alert('One of the parameters has an error:')
    }
    else {
        result = firstNumber6B + secondNumber6B;
        return console.log('The result of the addition is: ' + result);
    }
}

// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si
//  es un número entero.

console.log('-Exercise 6.c: ');

function validateInteger(number) {
    return Number.isInteger(number);
}
console.log(validateInteger(firstNumber6A));

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
// haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d: ');
function validation6D (firstNumber6D, secondNumber6D) {
    if (isNaN(firstNumber6D) || isNaN(secondNumber6D)) {
        alert('One of the parameters has an error:')
    }
    else if (validateInteger(firstNumber6D) !== true) {
        alert('the first number will be rounded');
        firstNumber6D = Math.round(firstNumber6D);       
    }
    else if (validateInteger(secondNumber6D) !== true) {
        alert('the second number will be rounded');
        secondNumber6D = Math.round(firstNumber6D);  
    }
    else {
        result = firstNumber6D + secondNumber6D;
        return console.log('The result of the addition is: ' + result);
    }
}

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
// probando que todo siga funcionando igual.

console.log('-Exercise 6.e: ');
function validation6E (firstNumber6D, secondNumber6E) {
    if (isNaN(firstNumber6E) || isNaN(secondNumber6E)) {
        alert('One of the parameters has an error:')
    }
    else if (validateInteger(firstNumber6E) !== true) {
        alert('the first number will be rounded');
        firstNumber6E = Math.round(firstNumber6E);       
    }
    else if (validateInteger(secondNumber6E) !== true) {
        alert('the second number will be rounded');
        secondNumber6E = Math.round(firstNumber6E);  
    }
}

function addition6E(firstNumber6E, secondNumber6E) {
    validation6E(firstNumber6E, secondNumber6E);
    result = firstNumber6E + secondNumber6E; 
    return console.log(result);

}

addition6E(firstNumber6A, secondNumber6A);