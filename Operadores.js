//Operadores Aritmeticos    
    
    //variables 
        var operando1 = 36; 
        var operando2 = 2;

    //Operador de +(suma)

        var resultado = operando1 + operando2;
        console.log("el resultado de la adicion es " + resultado);

    //Operador de *(multiplicacion)

        var resultadoMul = operando1 * operando2;
        console.log ("el resultado de la multiplicacion es "+resultadoMul);

    //Operador de /(resultado)

        var resultadoDiv = operando1/operando2;
        console.log ("el resultado de la division "+resultadoDiv)

    // Operador ++(incremento)

        resultadoDiv++;
        console.log (resultadoDiv);

//____________________________________________
    operanod1 = 5;
    operando2 = 3;
//Operadores de asignacion

    // operador =

        operando1= operando2;
        console.log("Reemplazo del vaor de una variable "+operando1);

    // operador +=
        operando1 += operando2;//= operando1 = operando1 + operando2
        console.log("operador += "+operando1);
    
    //operador +=
        operando1 -=operando2;
        console.log("operador -="+operando1);

//___________________________________________

// operadore de comparacion

    var numeroComparacion;
    var numeroComparacion1;
    var resultadoC;

    // Operador =

        //resultado verdadero
            numeroComparacion = 5;
            numeroComparacion1 = 5;
            resultadoC = (numeroComparacion == numeroComparacion1 );
            console.log("5 == 5 eso es "+resultadoC);

            numeroComparacion = "5";
            numeroComparacion1 = 5;
            resultadoC = (numeroComparacion == numeroComparacion1 );
            console.log(" 5(var tipo texto) == 5 eso es "+resultadoC);

        //resultados falso
            numeroComparacion = 2;
            numeroComparacion1 = 5;
            resultadoC = (numeroComparacion == numeroComparacion1 )
            console.log("2 == 5 es es "+resultadoC)

            numeroComparacion = "2";
            numeroComparacion1 = 5;
            resultadoC = (numeroComparacion == numeroComparacion1 );
            console.log("2(var tipo texto) == 5 es "+resultadoC);

    // Operador ===

        //son distintos tipos y distinto valor
            numeroComparacion = "8";
            numeroComparacion1 = 8;
            resultadoC = (numeroComparacion === numeroComparacion1 );
            console.log("8(valor tipo texto)=== 8 eso es "+resultadoC);//false

        // son de igual tipo y valor
            numeroComparacion = 8;
            numeroComparacion1 = 8;
            resultadoC = (numeroComparacion === numeroComparacion1 );
            console.log("8 === 8 eso es "+resultadoC);//true

    // Operador !==
    
        //son distintos tipos y distinto valor
            numeroComparacion = "8";
            numeroComparacion1 = 8;
            resultadoC = (numeroComparacion !== numeroComparacion1 );
            console.log("8(tipo texto)!== 8 eso es "+resultadoC);//true

        // son de igual tipo y valor
            numeroComparacion = 8;
            numeroComparacion1 = 8;
            resultadoC = (numeroComparacion !== numeroComparacion1 );
            console.log("8 !== 8 eso es "+resultadoC);//false

//____________________________________________

// Operadores logicos
    var opL1 = 2;
    var opL2 = 10;
    var opL3 = 20;

    // Operador &&(AND)

        //true && true 
        resOp = (opL1 < opL2) && (opL2<opL3);//2 < 10 , 10 < 20 
        console.log(resOp);//true

        //false && true
        resOp = (opL1 > opL2) && (opL2<opL3);//2 > 10 , 10 < 20
        console.log(resOp);//false

    // Operador ||(or)

        //true || true
        resOp = (opL1 < opL2) || (opL2<opL3);// 2 < 10 , 10 < 20
        console.log(resOp);//true

        //false || true 
        resOp = (opL1 > opL2) || (opL2<opL3);// 2 > 10 , 10 <20
        console.log(resOp);//true

        //false || false
        resOp = (opL1 > opL2) || (opL2>opL3);// 2 > 10 , 10 > 20
        console.log(resOp);//false

    // Operador ! cambia el valor de True a false y viceversa

        //true || true
        resOp = (opL1 < opL2) || (opL2<opL3);// 2 < 10 , 10 < 20
        console.log(!resOp);//true cambia a False

        //false || true 
        resOp = (opL1 > opL2) || (opL2<opL3);// 2 > 10 , 10 <20
        console.log(!resOp);//true cambia a false

        //false || false
        resOp = (opL1 > opL2) || (opL2>opL3);// 2 > 10 , 10 > 20
        console.log(!resOp);//false cambia a true