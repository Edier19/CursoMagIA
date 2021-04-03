//Ejericio de Reforsamiento, Semana 1
/* Productos
    Chocolate/  xc23/   12.50
    Paleta/     c4f2/    5.75
    Chicle/     gt74/    4.25
    Galleta/    l3k8/   9.10  */

const prompt = require('prompt-sync')();
const producto=["chocolate", "paleta", "chicle", "galleta"];
var precio = [12.50, 5.75, 4.25, 9.10];
var codigo = prompt("Inserte el codigo ");
var dinero = prompt("Cuanto dinero tiene ");

//Si el codigo coincide, el valor del codigo cambiara para que insertarlos en el lugar donde se encuentra el producto en el arreglo
if (codigo=="xc23")codigo = 0;

else if (codigo =="c4f2")codigo = 1;

else if (codigo =="gt74")codigo = 2;

else if (codigo =="l3k8")codigo = 3;

else console.log("codigo no valido, inserte un codigo valido")

// A partir de aqui nos meteremos en otro seccion de if, aqui nos dira si tenemos o no dinero suficiente

if (precio[codigo] == dinero)console.log("Compra de "+producto[codigo]+" exitosa, gracias por su preferencia");

else if (precio[codigo] < dinero){
    dinero -= precio[codigo]
    console.log("Compra de "+producto[codigo]+" exitosa,gracias por su preferencia \n su cambio es de "+ dinero);
}

else console.log("dinero insuficiente")
