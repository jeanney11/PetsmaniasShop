console.log("Hola Mundo!!");

var usuario = prompt("ingrese su nombre: ", "");
document.write("Hola "+ usuario);

var numeroA = parseInt (prompt("Ingrese un mumero"));
var numeroB = parseInt (prompt("Ingrese un numero"));
 var suma = numeroA + numeroB;
 var resta = numeroA - numeroB;
 console.log(suma);

 if (numeroB < numeroA) {
 console.log("realiza la suma: "+suma);
 }else{
console.log("Realiza una resta: "+ resta);
    
 }