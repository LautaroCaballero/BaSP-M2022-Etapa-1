console.log('For');

// Crear un array que contenga 5 palabras y recorrer dicho array 
// utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('-Exercise 5.a: ');
var array5A = ['dog', 'cat', 'lion', 'horse', 'monkey'];
for (var i=0; i<5; i++)
{
    console.log('The', i+1 + ' element of the array is: ', array5A[i]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada 
// palabra modificada.

console.log('-Exercise 5.b: ');
for (var i=0; i<5; i++) {
    console.log(array5A[i].slice(0,1).toUpperCase());
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con 
// un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta 
// con la cadena completa.

console.log('-Exercise 5.c: ');
var sentence = ""
for (var i=0; i<5; i++) {
    sentence += array5A[i];
}
alert(sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es 
// decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
// hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log('-Exercise 5.d: ');
var numbers = ""

for (i=0; i<10; i++) {
    numbers += i;
}
console.log('The array that was filled with the for function is: ', numbers);