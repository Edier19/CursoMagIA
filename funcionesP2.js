/*Ejercicio #1 
Escribir un programa que obtenga el
precio de un producto, y calcule el
precio total, ya que tambien se va a 
cobrar el costo de envio unicamente
si el precio del producto es mayor o 
igual a $399  */

//const promtp = requiere('prompt-sync')();
var nombreProducto = "celular";
var precioProducto = 500;
function precioTotal( precio , nombreProducto) {
    var resultado = 0;
    if (precio >= 399){
        resultado = precio + 100;
        console.log("EL total a pagar es : "+ resultado);
    }
    else if (precio < 399){
        resultado = precio;
        console.log("El total a pagar es: "+ resultado);
    }

}

//precioTotal(precioProducto,nombreProducto);

//Amgito de una funcion 
function ambitoVar(){
    const i = 1;
    if (i  == 1 ){
        var variableVar = "Hola mundo";
    }
    console.log( variableVar);
}
//ambitoVar();
//console.log( variableVar) Da a error 

var mensaje = "texto";
function mensajeF(){
    var mensaje = "Texto 2 "
    console.log(mensaje);
}
console.log(mensaje);
mensajeF()
console.log(mensaje)