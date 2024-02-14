/*
Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando 
un bucle 'while' en la consola del navegador.
*/
let cuenta=0;
let numeroUsuario= prompt('Ingresa el número hasta donde se quiere hacer la cuenta')
console.log(numeroUsuario)
while(cuenta <= numeroUsuario){
    console.log(cuenta);
    cuenta++;
}