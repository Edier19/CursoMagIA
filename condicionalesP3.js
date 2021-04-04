/*Ejercicio 1 
Cada vez que un persona ingrese una hora del dia 
se mostrara un mensaje que diga el deporte que se
esta realzando en la cancha*/

const prompt = require('prompt-sync')();
var hora = prompt("ingresa la hora ");
var num;
var deporte = ["futbol", "futbol americano", "atletismo"];

if (hora == 12 || hora <= 6){
    if (hora <= 2) num= 0;
    else if (hora > 2 && hora <= 4)num= 1
    else num =2;

    console.log("son las "+hora+" pm se esta jugando "+deporte[num]+" en la cancha");
}
else console.log("no hay ninguna actividad a esa hora")

//Ejercicio 2
//Cada vez que una persona ingrese un deporte, te dira
//el horario que le corresponde para la cancha.

num = prompt("Elije el deporte para ver el horario \n 1. Futbol \n 2. Futbol americano \n 3. Atletismo");
console.log("haz elegido "+deporte[--num]);
num++;

switch (num){
    case 1:
        console.log("su horario es de 12:00 am hasta las 2:00 pm")
        break;

    case 2:
        console.log("su horario es de 2:00 pm hasta las 4:00 pm")
        break;

    case 3:
        console.log("su horario es de 4:00 pm hasta las 6:00 pm")
        break;
    
    default:
        console.log("el numero insertado no esta entre las opciones")
        break;
}