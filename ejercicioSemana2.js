// Ejercicio de Reforzamiento Semana 2 

//Primero guardamos las dos partes del abecedario en dos arreglos distintos
var abecedario1 =["a","b","c","d","e","f","g","h","i","j","k","l","m"];
var abecedario2 =["n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Hacemos que el usuario inserte el mensaje 
const prompt = require('prompt-sync')();
var mensaje = prompt("Incerte un mensaje ");

//Este valor nos servira para saber la canticad de valores no validos que se encuentren
//Se le da el numero de caracteres que tenga el mensaje original para est
var valoresInv = mensaje.length;

// Este es el arreglo donde pondremos el mensaje ya cifrado
var mensajeCi=[];

// Declaramos la variable 'a' que indicara en que lugar del mensaje estamos en el arreglo 'mensajeCi'
// El condicional esta para que una vez el mensaje cifrado este completo con la misma cantidad de caracteres del mensaje original este se detenga
for (var a = 0; mensaje.length != mensajeCi.length; a++) {

    //La variable 'b' indica en que espacio de los arreglos (abecedario1 y abecedario2) estamos 
    for (var b = 0; b < mensaje.length; b++) {
    //Los condicionales comparan el mensaje original con los arreglos en donde se guardaron el abecedario
        
        if(mensaje[a]==abecedario1[b]){
        // Si este esta condicion se cumple entonces el  mensaje cifrado sera el valor de quien este en la misma posicion que este, osea que el mensaje sera reemplazado por la la parte correspondiente
        // del abecedario y sera guardado en el mensaje cifrado
            mensajeCi[a]=abecedario2[b];
            //Se le resta uno para por cada vez que se meta en una condicion de esta manera la diferencia al final sera las veces que un valor no cumplia
            //con ninguna de las condiciones y por ende no era un valor valido
            valoresInv--;
            //Una vez entrado a una condicion este hara la condicion que hace que el for siga su ciclo sea obligado a parar, asi no tendra
            // que seguir comparando la posicion una vez hayada el valor que cumpla una de las condiciones
            b = mensaje.length;
        }
        //Este compara lo mismo de arrbia, si no se haya en la primera parte del abecedario se busca en este y pasa lo mismo 
        else if(mensaje[a] == abecedario2[b]){
            mensajeCi[a]=abecedario1[b];//Este es lo que guarda el valor de la parte correspondiente al abecedario en el codigo cifrado
            valoresInv--;//Tiene la misma funcion que el de arriba
            b = mensaje.length;//Como ya fue mencionado este hace que el ciclo se rompa
        }
        // Si el mensaje tiene espacios entre sus palabras este tambien sera trasladado para que se entienda
        else if (mensaje[a]== " "){
            mensajeCi[a]=" ";//Esto es lo que se insertara en la casilla ya que si solo lo dejamos sin ningun valor al hacer el join 
                             //el espacio no se agrega si no se le indica
            valoresInv--;
            b = mensaje.length;

        }

    }
    //Este condicional esta para el caso de que haya  un valor que no se encuentre sin esto el ciclo podria acabar siendo infinito, es como un limitador 
    if (a == mensaje.length-1){
        mensajeCi.length= mensaje.length;}//Esto hara que el cilclo se rompa, volviendo la condicion del for verdadera

    // Consolas solo para visualizar la manera en que funciona el codigo
    console.log(mensajeCi)
    console.log(valoresInv)
    
}
console.log("valores invalidos "+ valoresInv);//Aqui se menciona la cantidad de valores invalidos
console.log(mensajeCi.join(''))//la funcion join hace que los valores dentro del arreglo se fusionen en una sola cadena de texto



