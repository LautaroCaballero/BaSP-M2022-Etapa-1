console.log('Strings');

// a.Crear una variable de tipo string con al menos 10 caracteres y 
// convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a: ');
var string2A = 'radiumrocket';
console.log('The variable in uppercase is:', string2A.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres y generar 
// un nuevo string con los primeros 5 caracteres guardando el resultado en 
// una nueva variable (utilizar substring).

console.log('-Exercise 2.b: ');
var firstString2B = 'RadiumRocket';
var secondString2B = firstString2B.substring(0,5);

console.log('The first five characters of the string are:', secondString2B);
// Crear una variable de tipo string con al menos 10 caracteres y generar un 
// nuevo string con los últimos 3 caracteres guardando el resultado en una nueva 
// variable (utilizar substring).

console.log('-Exercise 2.c: ');
var firstString2C = 'RadiumRocket'
var secondString2C = firstString2B.substring(7,12);
console.log('The last five characters of the string are:', secondString2C);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una 
// nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d: ');
var firstString2D = 'RadiumRocket'
var secondString2D = firstString2D.substring(0,1).toUpperCase() + firstString2D.substring(1,12).toLowerCase();
console.log('Lowercase string with the first letter capitalized: ', secondString2D);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e: ');
var firstString2E = 'Radium Rocket'
var secondString2E = firstString2E.indexOf(' ', 0);
console.log('The blank space is in the position number: ', secondString2E);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
// ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
// toLowerCase y el operador +).

console.log('-Exercise 2.f: ');
var firstString2F = 'radiumRocket javaScript'
var secondString2F = firstString2F.substring(0,1).toUpperCase() + 
firstString2F.substring(1, firstString2F.indexOf(' ', 0)).toLowerCase() +  
firstString2F.substring(firstString2F.indexOf(' ', 0), (firstString2F.indexOf(' ', 0)+2)).toUpperCase() + 
firstString2F.substring((firstString2F.indexOf(' ', 0)+2), firstString2F.length).toLowerCase();
console.log('The string with the first two letters capitalized are: ', secondString2F);



