/*alert('Hola Devs');
alert(' Sean bienvenidos al juego del numero secreto ')

let contraseniaSistema = "1234";
let contrasenia = prompt('Ingrese su password:')

if (contrasenia == contraseniaSistema){
    alert("Acceso garantizado")
} else{
    alert("Acceso restringido, vuelve a intentarlo")
}
console.log(contraseniaSistema); 
*/
//Se puede usar const, let y var para comportamiento de variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let turnos = 'vez';
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 15;

//console.log(numeroSecreto)//
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 al ${numeroMaximo}`));

    //Camel Case, siempre escribir en minuscula el nombre de las varbiables si vienen con mas de 2 palabras todas las palabras consiguientes de la primera tendran la primer letra en mayuscula//
    // ` `Comillas invertidas para uso
    console.log(typeof(numeroUsuario));
    // Un = es definicion 2 == es comparacion                       '? Expresion de if '  ' : Expresion de else'                //
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste! El numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${turnos == 1 ? 'vez' : ' veces'}`); // Operador ternario //
    } else{
        if (numeroUsuario > numeroSecreto){
            alert('El numero Secreto es menor')
        } else{
            alert('El numero Secreto es mayor')
        }
        //intentos = intentos + 1;
        //turnos = 'veces';
        intentos++;
        if(intentos > maximosIntentos){
            alert(`Fallaste, Completaste los  : ${maximosIntentos}  intentos`)
            break;
        }
        alert('Vuelve a intentarlo')
    }
    //Esto incrementa el contador de intentos al no acertar
    
}
