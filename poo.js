//Programacion orientada a objeros 
//Creacion de un obejeto

var celularRojo = {
    color :"azul",
    peso: 80,
    numCamaras: 4,
    sistema:"android",
    duracionBateria: 10,
    prender : function(){return "Prendiendo..."},
    reiniciar : function (){return "Reiniciando..."}


}

console.log(celularRojo);
console.log(celularRojo["prender"]);
const prompt = require('prompt-sync')();

class galleta {
    constructor (tamano, forma, sabor, ){
        this.tamano = tamano;
        this.forma = forma;
        this.sabor = sabor;
    }
}

let galletaChocolate = new galleta("5x5 cm","cuadrado", "chocolate");
var galletaVainilla = new galleta("5 cm","circulo","vainilla")

console.log(galletaChocolate);
console.log(galletaVainilla);

console.log(galletaChocolate.tamano);



var tamano ;
var forma ;
var sabor;

let galletaRandom = new galleta(tamano,forma,sabor)

//console.log(galletaTamano)

/*let variable = 'hola comoa';
if (1 ==1){
    console.log(variable);
    for (let index = 0; index < 3; index++) {
        console.log(variable)   
        variable = 1;
         revisar();
    }
}
function revisar(){
    console.log(variable)
}*/

//----------------------------------------------
var fruta ={ nombre : "manzana"}
var fruta2 = {nombre : "manzana"}

var resultado= (fruta == fruta2);

console.log(fruta.nombre.concat(fruta2.nombre));

var frutaN3 = fruta
var resultadoN2 = (frutaN3 === fruta);

console.log(resultadoN2);


console.log(arriba)
