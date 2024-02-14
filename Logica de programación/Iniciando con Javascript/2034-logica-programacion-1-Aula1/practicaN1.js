/*
Pregunta al usuario qué día de la semana es.
 Si la respuesta es "Sábado" o "Domingo", 
 muestra "¡Buen fin de semana!". 
 De lo contrario, muestra "¡Buena semana!".
*/
let diaUsuario = prompt('Indique el día de la semana');
let diaUsuarioMinuscula = diaUsuario.toLowerCase(diaUsuario);
console.log(diaUsuarioMinuscula);
if( diaUsuarioMinuscula == 'sábado' || diaUsuarioMinuscula == 'domingo'){
    alert('Feliz fin de semana')
} else {
    alert('Buena semana')
}
