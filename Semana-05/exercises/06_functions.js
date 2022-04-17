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
if(!isNaN(firstNumber6A) && !isNaN(secondNumber6A)) {
    addition6A(firstNumber6A,secondNumber6A);
    console.log(result);
}
else {
    alert("One of the parameters has an error: " + Number(firstNumber6A) + " " + Number(secondNumber6A));
}
// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c: ');

function validateInteger(number) {
    return Number.isInteger(number);
}
console.log(validateInteger(firstNumber6A));
// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
// haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('-Exercise 6.d: ');
if (!isNaN(firstNumber6A) && !isNaN(secondNumber6A)) {
    if (firstNumber6A % 1 != 0) {
        alert("The first rounded number is " + parseInt(firstNumber6A));
    }
    else if (secondNumber6A % 1 != 0) { 
        alert("The second rounded number is " + parseInt(secondNumber6A));
    }
    else {
        addition6A(firstNumber6A,secondNumber6A);
        console.log(result);
    }

}
else {
    alert("One of the parameters has an error: " + Number(firstNumber6A) + " " + Number(secondNumber6A));
}
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
// probando que todo siga funcionando igual.
console.log('-Exercise 6.e: ');
function validateDecimal(numberA, numberB) {
    if (!isNaN(numberA) && !isNaN(numberB)) {
        if (numberA % 1 != 0) {
            alert("The first rounded number is " + parseInt(numberA));
        }
        else if (numberB % 1 != 0) { 
            alert("The second rounded number is " + parseInt(numberB));
        }
    }
    else {
        alert("One of the parameters has an error: " + Number(numberA) + " " + Number(numberB));
    }
}
addition6A(firstNumber6A,secondNumber6A);
console.log(result); 
