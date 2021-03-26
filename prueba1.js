//Variables
var practica1 = 5;
var practica2 = 5;
var practica3 = 5;
var practica4 = 5;
var promedio;

//Condicion 1 (si la variable con menor valor es practica1)
    if ((practica1 <= practica2)&&(practica1 <= practica3)&&(practica1 <=practica4)){
        promedio = (practica2 + practica3 + practica4)/3;
        console.log("Su puntaje mas bajo ha sido "+practica1);
        console.log("El promedio es "+ promedio);
    }

//Condicion 2 (si la varable con menor valor es practica2)
    else if ((practica2 <= practica1)&&(practica2 <= practica3)&&(practica2 <=practica4)){
        promedio = (practica1 + practica3 + practica4)/3;
        console.log("Su puntaje mas bajo ha sido "+practica2);
        console.log("El promedio es "+ promedio);
    }

//Condicion 3 (si la varable con menor valor es practica3)
    else if ((practica3 <= practica2)&&(practica3 <= practica1)&&(practica3 <=practica4)){

        promedio = (practica2 + practica1 + practica4)/3;
        console.log("Su puntaje mas bajo ha sido "+practica3);
        console.log("El promedio es "+ promedio);
    }

//Condicion 4 (que ninguno de las condiciones anteriores se cumplal)
    else {
        promedio = (practica2 + practica3 + practica1)/3;
        console.log("Su puntaje mas bajo ha sido "+practica4)
        console.log("El promedio es "+ promedio);
    }
