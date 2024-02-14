let titulo = document.querySelector('h1');
let ciudadBrasil;
let num1;
let num2;
titulo.innerHTML = 'Hora del desafío';

function botonConsole(){
    console.log('El botón fue clicado');
}
function botonPrompt(){
    ciudadBrasil= prompt('Ingrese el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
}
function botonAlerta(){
    alert('Yo amo JS');
}
function botonSuma(){
    num1= parseInt(prompt('Ingrese el primer número a sumar'));
    num2= parseInt(prompt('Ingrese el segundo número a sumar'));
    alert(`El resultado de la suma de ${num1} y ${num2} es ${num1+num2}`);
}
