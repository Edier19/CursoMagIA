/*Crea un  programa en donde tengas que adivinar
las letras de una palabra de 4 letras, tendras solo
4 intentos para adivinarla, en un inicio la palabra
estara oculta, pero cada vez que aciertes, se mostrara 
la letra si adivinas la palabra antes que se 
te acaben los intentos ganas, si no pierdes*/

const promtp = require('prompt-sync')();
var palabra_A = "hola";
var palabra_U ;
var letrasF = parseInt(palabra_A.length);
var palabra_J =[];

for (let index = 0; index < palabra_A.length; index++) {
    palabra_J[index]="_"    
}

for (var intentos = 0; intentos <= palabra_A.length; intentos++) {
    palabra_U = promtp('Inserte una letra ');

    if (palabra_A != palabra_U){        
        for (var l = 0; l < palabra_A.length; l++) {
            for (let letra = 0; letra <= palabra_A.length; letra++) {
                if (palabra_U[letra]==palabra_A[l]){
                palabra_J[l] = palabra_U[letra];
                letrasF--}
                letra =palabra_A.length;    
                }
            }
        if (palabra_J.join('')==palabra_A)break;      
        console.log(palabra_J.join(''));      
        }

    else {
        palabra_J=palabra_U;
        break;
    }
}
if (palabra_J==palabra_A)console.log("felicidades has ganado el juego");
else console.log("mejor suerte para la proxima, la palabra era : "+palabra_A+ ", te faltaron "+letrasF+"  letras");   