//Ejercicio
//Realizar un programa que lea por 
//teclado 5 notas/calificaciones 
//y muestre el promedio de estas.

const promt = require('prompt-sync')();
var nota = [];
nota1 = parseInt (promt("dame el valor de la calificaciones"));
nota2 = parseInt (promt("dame el valor sde la calificaciones"));
nota3 = parseInt (promt("dame el valor de la calificaciones"));
nota4 = parseInt (promt("dame el valor de la calificaciones"));
nota5 = parseInt (promt("dame el valor de la calificaciones"));

var promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

console.log( promedio);

