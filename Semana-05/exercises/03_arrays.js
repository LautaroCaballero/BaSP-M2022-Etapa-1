console.log('Arrays');
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los 
// meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a: ');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('The fifth month is: ', months[4] + ' and the eleventh month is: ', months[10]);
// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b: ');
console.log('The sorted array is: ', months.sort());
// Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c: ');
months.unshift('Primer elemento');
months.push('Ultimo elemento');
console.log('The array with the new elements is: ', months);
// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d: ');
months.shift();
months.pop();
console.log('The array without the new elements is: ',months);
// Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e: ');
console.log('The reverse sorted array is: ',months.reverse());
// Unir todos los elementos del array en un único string donde cada mes este separado 
// por un guión - (utilizar join).
console.log('-Exercise 3.f: ');
console.log('The array with the join function is: ',months.join('-'));
// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g: ');
var newMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('The sliced new array is: ', newMonths.slice(4,11));