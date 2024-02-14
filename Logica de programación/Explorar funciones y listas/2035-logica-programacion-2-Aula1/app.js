let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroMinimo = 1;

condicionesIniciales();

//Bloque de funciones

function asignarTextoElemento(Elemento,texto){
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario==numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1)? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto

        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los números
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearontodos los números posibles');
    }else{
        //Si el número generado esta incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    /*Indicar mensaje de intervalo de números,
    Generar el número aleatorio,
    Inicializar el número de intentos
    */
    condicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

