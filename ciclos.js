//Ciclos - while
/*var contador = 5;
var contador2 = 30;
while(contador <= contador2 && contador2 >= 20){
    console.log(contador+ " " + contador2);
    contador++;
    contador2--;
};*/

//Ciclos do-while
var contadorN3 = "hola";
do{
    console.log("Hola como estas companero")
}while(contadorN3 != "hola")

var condicionN2 = 323;

do {
    console.log("valor "+ condicionN2)
    condicionN2 -= 5;
} while (condicionN2 >= 6);

/*Ejercicio do-while
crear un programa que lea tantos numeros
como se quiera hasta que se reciba un cero,
y se motrara un resultado, que sera la  
de todos los numeros ingresados*/

const prompt = require('prompt-sync')();
var recibeN;
var suma = 0;
do{
    recibeN = parseInt(prompt("Dame un numero para sumar "))
    suma += recibeN;
}while(recibeN != 0)
console.log("La suma es "+suma);