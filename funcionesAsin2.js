/*console.log("hola");
setTimeout(function timeout(){
    console.log("mundo");
}, 4*1000);

console.log("que onda ");

function primero(callback){
    setTimeout(function(){
        return callback ("Primero");
    },5 * 1000);
}

function segundo(callback){
    return callback("Segundo");
}
console.log("si a ti yo te puedo tener")

primero(function(resultado1){
    console.log(resultado1); 
    segundo(function(resultado2){
        console.log(resultado2)
        primero(function(resultado1){
            console.log(resultado1+1); 
        });
    });
});
segundo(function(resultado2){
    console.log(resultado2)
    primero(function(resultado1){
        console.log(resultado1+1); 
    });
});*/
function tempo(callback) {
    setTimeout(function () {
        console.log("hola como estan")
        return callback 

    },5000)
}
function tempo2(callback) {
    setTimeout(function () {
        return callback ("y entonces murio")
    },0)
}
tempo(function() {
    //console.log(a)
    tempo2(function (a) {
        console.log(a)
    })
})
//tempo();
tempo(function() {
    
    console.log("hola quetan")
})