/*Ejemplo
Dado un numero, separarlo en centenas, decenas y unidades
Intercambiar la posicion entre las centenas y las unidades
e imprimir el numero total*/

var numerCom = 623;

if (numerCom < 1000 && numerCom > 99){ 
    var centenas = parseInt (numerCom/100);

    var decenas = parseInt((numerCom % 100)/10);
    
    var unidades = (numerCom % 100)- decenas*10;
    
    console.log("el valor es :"+numerCom +"\n El valor con la centena y unidad cambiados es :"+unidades + decenas + centenas);
}
else console.log("ingrese un numero de 3 cifras")

//Condicional Switch

/*var conSwitch = 8;

switch(conSwitch){
    case 1:
        console.log("1")
        break;
    
    case 2:
        console.log("2")
        break;
    
    default:
        console.log("valor diferente")
        break;
    }