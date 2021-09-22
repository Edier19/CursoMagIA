//Ejercicio de reforzamiento. Semana 4 
/* a mitad del proceso, fue cuando el sistema de inscripciones paro
de funcionar, por lo el total de estudiantes que deben de inscribirse
es el doble de los que estan ya inscritos */

//Primero creamos una clase "estudiante" donde cada caracteristica
//sera la informacion que se tiene cada alumno

class estudiante{
    constructor(nombre, numeroCuenta, inscripcion){
    this.nombre = nombre;
    this.numeroCuenta = numeroCuenta;
    if (inscripcion == null)this.inscripcion = "Inscrito"; // ya que todos lo estudiantes se inscribenn a la misma materia
    else this.inscripcion = "No inscrito";
    }
}
//es una mauske herramienta que usaremos mas tarde 
const numero = require('./utilerias.js');
var num = numero.numAleatorio();


const prompt = require('prompt-sync')();

//El numero de alumnos que es igual capacidad del arreglo, entonces : numAlum = alumno.lenght
var numAlum = parseInt(prompt("Cuantos numeros de alumnos hay en total ? "));

//Variables que se usaran para asignar los datos de cada estudiante
var nombre = "";
var numeroCuenta = 0;

//Creamos el arreglo donde ese guardara la informacion de los estudiantes (un arreglo de objetos)
var alumno = [numAlum];

//Luego ingresamos la informacion de los estudianes ya inscritos
alumIngre(numAlum/2)

//imprimimos los estudiantes que ingresaron para comprobar 
console.log(alumno);

//Ahora ingresar los datos de los alumnos no inscritos
alumIngre(numAlum,1)

//Revisa si un estudiante ya ha ingresado de nuevo, 
for (let x = numAlum/2 ; x < numAlum; x++) {//x son los alumnos que no inscritos, osea de la mitad para adelante
    for (let y = 0;y < numAlum/2; y++){// y son los alumnos inscritos, la primera mitad de los alumnos
        //los nombres de los alumnos inscritos se compara con los alumnos no inscritos
        if(alumno[x].nombre == alumno[y].nombre){
            //si se encuentra un nombre igual se le pedira que ingrese sus datos de nuevo
            console.log("el estudiante ya esta inscrito, ingrese el nombre y numero de cuenta de un nuevo estudiante porfavor")
            datos();
            alumno[0] = new estudiante(nombre, numeroCuenta,null);
        }
    }
}
console.log("Esta es la lista de los alumnos")
console.log(alumno)
console.log("las inscripciones comenzaran al oprimir el boton Enter")
prompt();

//Funciones asincronas
tempo(function(b){
        b//Se llama a la funcion callback para que tempo2 funcione
        tempo2(function (x) {
            console.log(x)
            console.log("Lista de alumnos que se han inscritos")
            console.log(alumno)
        })
})

//----------------------------------------------------------------------------------------
// Funciones 

//Crear una funcion por cada vez que se le pide al estudiante ingresar sus datos
function datos(){
    nombre = prompt(" Dime el nombre del estudiante :")
    numeroCuenta = prompt (" Ingrese numero de cuenta :")
}

function inscripcions(index,x){
    if (x == null)alumno[index] = new estudiante(nombre, numeroCuenta,x);//para los alumnos que ya ingresaron
    else{
        //para los alumnos que aun no han ingresado
        alumno[index] = new estudiante(nombre, numeroCuenta,x);
    }
}

//Funcion que para guardar los datos de los estudiantes en cada uno de los arreglos
function alumIngre(numAlum,x){//Si no ingresamos datos a x , se da por hecho de que los estudiantes estan inscritos
    for (let index = 0; index < numAlum; index++) {
        datos();
        //Al ingresar los datos para x, ignora los datos de la mitad de los estudiantes que ya fueron inscritos
        //para recolectar los datos de los estudiantes aun no inscritos
        if(x != null && index == 0)index += numAlum/2;
        inscripcions(index,x);
    }
}
//Funciones asincronas, para simular el tiempo que le toma a cada alumno hacer ingresar

function espera(callback){
    setTimeout(function() {
        return callback ("se ha inscrito con exito");
    },num*1500)//num es un numero aleatorio, cada estudiante tardara un numero de veces diferente 
}
function tempo2(callback) {
    setTimeout(function () {
       return callback ("las inscripciones han finalizadp") 
    },0)    
}
function tempo(callback) {//Funcion asincrona que simula las inscripciones 
    console.log("Alumnos inscibiendose, espere un momento por favor");
        //Aqui se va de alumno en alumno para que se inscriban
        for (let index = numAlum/2; index < numAlum; index++) {
            num = numero.numAleatorio();//
           espera(function(x){
                alumno[index].inscripcion = "inscrito";
                console.log(alumno[index].nombre+" "+x);
           })
    }
    setTimeout(function () { 
        return callback()  
    },num*1600)
}