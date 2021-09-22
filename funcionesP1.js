/*//Declaracion de una funcion 
function multiplicar( primerOperando, segundoOperando){
    var resultado = primerOperando * segundoOperando;
    console.log("el resultado es "+ resultado);
}

//multiplicar(12,3);

//Funcion como expresion
var resultado = function multiplicaN2(primerOperando){
    return 2 * primerOperando;
}

console.log(resultado( 25 ));

function multiplicanN3(){
    var resultado2 = 2*2
    console.log("El resultado es :"+ resultado2)
}
//multiplicanN3();


//Funcion flecha
const saludar = (nombre) => console.log("hola "+nombre)
saludar("Luis ")

const suma = (numero) => console.log (numero *2);
suma(43)*/

// Ejercicio #1
//Escribir un programa que tenga una funcion a la que 
// se le pasa como parametro un numero y devuelve como
// resultado un texto que indica si el numero es par o impar
/*(function parImpar(numero){
    numero %= 2
    if (numero == 0)console.log("numero par");
    else console.log ("numero impar")
}
parImpar(10.3);*/

/* Ejecicio #2
Definir una funcion que muestre la informacion de un text
que se introduce como argumento y determina si el texto 
contiene mayuscula, minusculas o ambas*/

function definirTexto (texto){
    if ( texto == texto.toUppercase())console.log("esta en mayusculas")
    else if (texto == texto.toLowerCase())console.log("esta en minusculas")
    else console.log("el texto esta en ambos")
}
