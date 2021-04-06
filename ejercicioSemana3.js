//Ejercicio de reforzamiento. Semana 3

//Las acciones que tiene que hacer el dron para superar los obstaculos
// lo simplificaremos en numeros
/* Prenderse = on   Apagarse = Of
    0 = Subir --> Aro alto
    1 = Bajar --> Aro bajo
    2 = Girar (Derecha) --> Tobogan (Derecho)
    3 = Girar (Izquierda) --> Tobogan (Izquierdo)
*/
// Declaraciones de funciones 

//Funcion para apagar y encender el dron
var interruptor = function encenderApagar(x) {
    if(x == 0){ 
        lineas(3);
        console.log("El dron se encendió \nlisto para empezar la carrera\n");
        lineas(3);
        return "ON";
    }else if (x == 1){
        lineas(3);
        console.log("El dron se apago \n la carrera termino \n")
        lineas(3);
        return "OF";
    }
    else {
        lineas(1)
        console.log("Opcion no valida")
        lineas(1)}
}


// Declaremos las acciones
const prompt = require('prompt-sync')();

//Declaremos arreglos, uno para el orden de los obstaculos con numeros y otro con los nombres de los obstaculos
var numObstaculos = [1 , 1 , 2 , 0 , 3 , 0];
var nomObstaculos = ['Aro alto \n', 'Aro Bajo \n', 'Tobogan que gira a la derecha\n', 'Tobogan que gira a la izquierda\n'];

//se le pregunta al usuario si quiere iniciar la carrera
var eleccion = parseInt(prompt("Quieres empezar la carrera ? \n SI = 0 n\ NO = 1 \n"));

//variable que indica cuantos obstaculos fueron sorteados con exito
var contador = 0 ;

//al eleccion se 0 se activara la funcion
if (interruptor(eleccion)== "ON"){
    //Intrucciones como para las acciones
    lineas(3);
    console.log("      INTRUCCIONES     \n"
                +"1 = Subir --> Aro alto \n"
                +"2 = Bajar --> Aro bajo \n"
                +"3 = Girar (Derecha) --> Tobogan (Derecho \n"
                +"4 = Girar (Izquierda) --> Tobogan (Izquierdo)\n");
    lineas(3);
    prompt();//al usuario oprimir un boton el programa siga, esto para que no se pierda 

    for (var obstaculos = 0; obstaculos < numObstaculos.length; obstaculos++){
            //Es un arreglo dentro de otro  Ej: / numObstaculos[0] = 1  entonces nomObstaculos[1] = 'Aro Bajo'
            lineas(2);
            console.log(nomObstaculos[numObstaculos[obstaculos]]);
            lineas(2)
            
            //Dependiendo de que numero se haya introducido se hara la accion correspondiente a ese numero segun las instrucciones de arriba
            var accion =parseInt(prompt(" Elige el número de la acción que quieres realizar : "));

            switch (accion) {
                case 1:
                    subir();
                    exito(accion-1 == numObstaculos[obstaculos]);
                    //funcion exito, si el condicional se cumple el obstaculo sera sorteado con exito
                    //si no se cumple, chocara
                    break;
                
                case 2:
                    bajar();
                    exito(accion-1 == numObstaculos[obstaculos]);
                    break;

                case 3:
                    girarDerecha();
                    exito(accion-1 == numObstaculos[obstaculos]);
                    break;    
            
                case 4:
                    girarIzquierda();
                    exito(accion-1 == numObstaculos[obstaculos]);
                    break;

                default://opcion que aparece si el numero no se encuentra entre las opciones
                    lineas(1)
                    console.log("Accion no encontrada \n")
                    lineas(1)
                    exito(false);
                    break;
        }
    }
}

lineas(3)
console.log(interruptor(1));
lineas(3)

if (contador == 6){
    lineas(4)
    console.log('Carrera superada, felicidades \n')
    lineas(4)
}

else if (contador < 2){
    lineas(1)
    console.log('Carrera no superada, sigue esforzandote \n')
    lineas(1)}

else {
    lineas(3)
    console.log('Sigue Intentandolo \n');
    lineas(3)}

console.log("numero de obstaculos sorteados con exito :"+ contador);

//Funciones 

//Lineas puestas solo por estetica a lo largo del codigo
function lineas(x) {
    switch (x) {
        case 1:
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n")
            break;
    
        case 2:
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ \n")
            break;
        
        case 3:
            console.log("---------------------------------------------------------------------------------- \n")
            break;
        case 4:
            console.log("////////////////////////////////////////////////////////////////////////////////// \n")
            break;
        case 5:
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n")
            break;
    }
    
}
//Funciones de los movimientos
function subir() {
    lineas(5);
    console.log("subiendo \n")
    lineas(5);
    prompt();  
}

function bajar() {
    lineas(5);
    console.log("bajando \n")
    lineas(5);
    prompt();
}

function girarDerecha() {
    lineas(5);
    console.log("Girando a la derecha \n")
    lineas(5);
    prompt();
}

function girarIzquierda() {
    lineas(5);
    console.log("Girando a la izquierda \n")
    lineas(5);
    prompt;
}

// x es un valor booleano, sirve para ver si el obstaculo fue sorteado o no
function exito(x) {
    if (x) {
        lineas(4)
        console.log("Sorteado con exito \n")
        lineas(4)
        prompt();
        return contador++;}//si es sorteado con exito la variable contador se suma para saber cuantos de ellos fueron con exito

    else {
        lineas(1)
        console.log ("!HUY! acabas de chocar \n")
        lineas(1)
        prompt();
    }
}