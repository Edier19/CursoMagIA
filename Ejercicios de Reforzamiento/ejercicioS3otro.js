//Queremos  participar  en  el  campeonato  de  carreras  de  drones,  pero necesitamos   lograr   
//.. que   nuestro   dron   pueda   atravesar   distintos obstáculos al avanzar.
const prompt = require('prompt-sync')();

var obstacles = ["aro bajo", "aro bajo", "tobogán derecho", "aro alto", "tobogán izquierdo", "aro alto"]
var wayTrue = ["abajo", "abajo", "derecha", "arriba", "izquierda", "arriba"] //opciones correctas
var intento = [] //aqui se guardarán los movientos ingresados
var hitCounters = 0; // ← contadores hit←→fail
var failCounters = 2;
var onOff = prompt("||  Drone ON → 1  ||  Drone OFF → 2  || ");
//condiconal que ayuda a encender y llamar función de la carrera
if (onOff === "1") {
    console.log("----Drone ON---- || ↓↓↓↓ Bienvenido a la carrera Drone Race ↓↓↓↓");
    console.log("En base al obstaculo proximo tendras que ingresar un movimiento en minusculas");
    console.log("Tienes 2 vidas y 7 intentos para lograrlo !here we go¡ ");
    droneOn();
} else if (onOff === "2") {
    console.log("----Drone OFF----");
};

// droneOn permite el inicio de la carrera
function droneOn() {
    for (var i = 0; i <= (obstacles.length + 1); i++) {

        intento[i] = prompt("El obstaculo es: " + obstacles[i] + " || Ingresa un movimiento: ");

        if (intento[i] == wayTrue[i]) {
            hitCounters++;
            console.log("Muy bien, tu drone va por buen camino" + " ||Aciertos: " + hitCounters + " || fallas restantes: " + failCounters);
        } else {
            console.log("Te equivocaste :C");
            console.log("Te quedan " + (failCounters - 1) + " intentos");
            failCounters--;
            i--;
        }

        if (hitCounters == 6) { // ← ← permiten salir del ciclo for cuando se terminen los intentos 
            break;
        } else if (failCounters == 0) {
            break;
        }
    }
};
// Esta parte contabiliza los aciertos y fallas totales para dar por terminado el ciclo 
if ((failCounters == 0 && hitCounters < 6) || (failCounters < 6 && hitCounters < 6)) {
    console.log("Carrera no superada, sigue esforzándote");
} else if (hitCounters == 6) {
    console.log("Carreta superada, !Felicidades¡ ");
}