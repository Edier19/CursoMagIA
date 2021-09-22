let persona  = {nombre: "Luis", apellido: "Guerra", edad : 20}

//Con descomposicion
let {apellido, nombre}= persona;
console.log("el nombre de la persona "+ nombre + " "+apellido)

//Sin descomposcion
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;

//Ejemplo #2 
let celular = {color : "Rojo",numCamaras: 4}

let {numCamaras} = celular;
console.log( numCamaras );

//Ejemplo #3

var paquete = {
    numEnvio : 4234,
    direccion : "calle 5",
    peso: "3k"
}

//let numEnvio, peso;
({ numEnvio,peso}=paquete);
console.log(numEnvio);

//Ejemplo de valor por defecto
//let {nombre : nombreSustituto = "santiago", apellidoM="lopez"} = persona
//console.log("el nombre es :"+nombre+" "+apellidoM)

//valores por defecto
let persona2 ={nombreN2: "omar ", edad:20}
var {nombreN2,apellido: apellidoN3 = "lopez"}=persona2;
console.log("el nombre es: "+ nombreN2 + " "+ apellidoN3);

//Descomposicion en funciones 
let envio ={
    numEnvio : 234,
    producto : "videojuego"
}
function datoEnvio({numEnvio,producto}){
    console.log("numero de envio "+ numEnvio);
    console.log("producto a enviar "+ producto);

}
datoEnvio(envio)