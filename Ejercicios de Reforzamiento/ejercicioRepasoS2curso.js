//Crea un programa en donde tengas que adivinar
//las letras de una palabra de 4 letras, tendras solo
//4 intentos para adivinarla, en un inicio la palabra
// esetara oculta, pero cada vez que aciertes, se mostrara
//la letra, si adivinas la palabra antes de que se
// te acaben los intentos ganas, si no pierrdes

const prompt = require('prompt-sync')();
var palabraOculta = [];
var palabraMostrada = ["_","_","_","_"];
var conadorAciertos = 0;
var contadorFallas = 4;

palabraOculta[0]= prompt("dame la letra numero 1: ")
palabraOculta[1]= prompt("dane la letra numero 2: ")
palabraOculta[2]= prompt("dame la letra numero 3: ")
palabraOculta[3]= prompt("dane la letra numero 4: ")

for (var i = 0; i < palabraOculta.length * 2; i++) {
    var intento = prompt("ingresa una letra: ")
    switch(intento){
        case palabraOculta[0]:
            palabraMostrada[0] = palabraOculta[0];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;

        case palabraOculta[1]:
            palabraMostrada[1] = palabraOculta[1];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
            
        case palabraOculta[2]:
            palabraMostrada[2] = palabraOculta[2];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;

        case palabraOculta[3]:
            palabraMostrada[3] = palabraOculta[3];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
            
        default:
            console.log("Te equivocaste :( \n te quedan"
                        + contadorFallas - 1 + "intentos");
            console.log(palabraMostrada);
            contadorFallas--;
            break;
    }
    if (contadorAciertos == 4)break;
    else if(contadorFallas== 0)break;
}
if ((contadorFallas == 0 && contadorAciertos < 4)||(contadorFallas<4))console.log("perdiste")
else if ( contadorAciertos == 4)console.log("ganaste")