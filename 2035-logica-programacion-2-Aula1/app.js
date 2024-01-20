let numeroSecreto = 0;
let intentos = 0;
let numerosAleatorios = [];
let numeroMaximo = 10;
let limiteDeIntentos = 5;
// Ambito alcance global
function asignarTextoElemento(elemento,texto){
    let elementoHTML=  document.querySelector(elemento); //Objeto y selecciona espacion dentro de un html para editarlo de forma dinamica ademas de recibir parametros que se convertiran en poximas variables
 elementoHTML.innerHTML = texto;
 return;

}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUser').value);
    
 /*   console.log(typeof(numeroUsuario))
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numeroUsuario)
*/
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1)? 'turno' : 'turnos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        //Usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');  
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUser').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Ambito o alcance de bloque  \

    console.log(numeroGenerado);
    console.log(numerosAleatorios);
//Arreglando recursividad con una salida de condicion
    if(numerosAleatorios.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        //Si el numero generado esta incluido en la lista
            if (numerosAleatorios.includes(numeroGenerado)){
                return generarNumeroSecreto();
            } else{
            numerosAleatorios.push(numeroGenerado);
            return numeroGenerado;
            }
    }  
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Adivina el numero entre 1 y ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    numerosAleatorios = [];
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar la caja   
    limpiarCaja();        
    //Indicar mensaje de inicio intervalo de numeros
    condicionesIniciales();    
    //Generar el numero Aleatorio
    //Reiniciar Intentos
    //Deshabilitar el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')  
}

condicionesIniciales();

//Todos los arreglos inician en posicion 0