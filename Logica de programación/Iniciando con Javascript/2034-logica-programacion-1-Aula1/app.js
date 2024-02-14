//Variables del proyecto
let numeroMaximoPosible=100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario=0;
let contadorIntentos=1;
let maximosIntentos=8;
//console.log(numeroSecreto);
while(numeroSecreto !=  numeroUsuario ){
    
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza la comparación
    */
    if (numeroUsuario == numeroSecreto){
        //Fue verdadera la condición
        alert(`Acertaste,  el número es : ${numeroSecreto}, lo hiciste en ${contadorIntentos} ${contadorIntentos == 1 ? 'vez':'veces'}`);
    }
        else{
        contadorIntentos++;
        if(contadorIntentos>maximosIntentos){
            alert(`LLegaste al número máximo de ${maximosIntentos} intentos, el número secreto es ${numeroSecreto}`);
            break;
        }
        if(numeroUsuario>numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        } 
}
