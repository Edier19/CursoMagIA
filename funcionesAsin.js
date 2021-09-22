//Ejecucion sencilla
console.log("inicio");

function dos(){
    console.log("dos");
}

function uno (){
    console.log("uno");
    dos();
    console.log("tres");
}
uno ();

console.log("fin\n");

function dos(){
    setTimeout( function(){
        console.log("Dos");
    },1000);
}
function uno (){
    setTimeout(function(){
        console.log("uno")
    },0);
    dos();
    console.log("Tres");
}
uno();
console.log("fin");

/*function tiempo(index){
    setTimeout(function tempo(){
    console.log(index+"  T1");
    controlT += 10000;
    console.log(controlT);
},100);
}
function tiempo2(index){
    setTimeout(function tempo(){
    console.log(index+"  T2");
},0);
}

var controlT = 1000;

for (let index = 1; index <= 10; index++) {
    tiempo(index);
    console.log(controlT);
    tiempo2(index);
}
console.log(controlT);
*/


