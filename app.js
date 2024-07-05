
//se redujo el codigo eliminando las lineas 5 y 6 y encapsulandola en una sola funcion llamada asignartextoelemento
//pudiendo llamar a la funcion cuando se necesite en este caso para 'p' parrafo 

/*let parrafo = document.querySelector('p')
parrafo.innerHTML = 'indica un nùmero del 1 al 10'*/

let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];

//console.log (numeroSecreto);

function AsignarTextoElemento(elemento, texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
//se escribe return; al final del codigo dentro de la funcion solo como buena ractica.
}



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log (Intentos);
if (numeroDeUsuario === numeroSecreto) {
    AsignarTextoElemento('p',`Acertaste el nùmero en  ${Intentos} ${(Intentos === 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute ('disabled');
}
else {
    // El usuario no acerto 
    if (numeroDeUsuario < numeroSecreto){
        AsignarTextoElemento('p','Inténtalo de nuevo, el número secreto es mayor');
    }
else {
    if (numeroDeUsuario > numeroSecreto) {
        AsignarTextoElemento('p','Inténtalo de nuevo, el número secreto es menor');
    }
}
Intentos++;

// Aqui estamos llamando a la funcion para vaciar la caja en blanco luego de que el usuario no acierte.

limpiarcaja();

}
return;
}
/*
Tener en cuenta que tambien podemos solicitar un valor sin nesecidad de una variable, asi:

function limpiarcaja () {
    document.querySelector ('#valorUsuario').value = '';
*/
function condicionesIniciales () {
    AsignarTextoElemento('h1','Juego Del Nùmero Secreto'); 
    AsignarTextoElemento('p','Indica un nùmero del 1 al 10');
    numeroSecreto = generarNùmeroSecreto();
    Intentos = 1;
}   
function reiniciarJuego(){
    // limpiar caja
    limpiarcaja();
    // indicar mensaje de intervalo de números
    // Generar el numero aleatorio
    // Reiniciar el numero de intentos 
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function limpiarcaja () {
   let valorCaja =  document.querySelector ('#valorUsuario')
   valorCaja.value = '';
}

function generarNùmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // Si el numero generado esta incluido en la lista realiza una funcion, de lo contrario haz lo otro.
    // Creamos un condicion para eso.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        
    }
    else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}   
    //aqui estamos validando una condicion, comparando dos variables mostrandolo en la consola del navegador.
    //Luego de modificar el valor del usuario con parseInt, usamos el triple igual en el console.log para validar que se estan comparan dos valores iguales, valor y tipo de dato.


// Comento la llamada de estas dos funciones porque las estoy encapsulando en una funcion llamada mensajesIniciales.
/*AsignarTextoElemento('h1','Juego Del Nùmero Secreto'); 
AsignarTextoElemento('p','Indica un nùmero del 1 al 10');*/
