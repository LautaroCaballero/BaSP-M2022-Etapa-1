console.log("If Else");
// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
// y sino un alerta con el mensaje “Lower than 0,5”.
console.log('-Exercise 4.a: ');
var randomNumber;
randomNumber = Math.random();

console.log(randomNumber);
if (randomNumber >= 0.5) {
    alert('Greater than 0,5');
}
else {
    alert('Lower than 0,5');
}
// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
console.log('-Exercise 4.b: ');
var Age = 46;

if (Age<2) {
    alert('Bebe');
}
else if (Age>=2 && Age<=12){
    alert('Niño')
}
else if (Age>=13 && Age<=19){
    alert('Adolescente')
}
else if (Age>=20 && Age<=30){
    alert('Joven')
}
else if (Age>=31 && Age<=60){
    alert('Adulto')
}
else if (Age>=61 && Age<=75){
    alert('Adulto Mayor')
}
else if (Age>75){
    alert('Anciano')
}