let intentos =1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos===1) ? 'intento!' : 'intentos!'}` );
    document.getElementById('reiniciar').removeAttribute('disabled');
} 
    else{
        //El usuario no acerto
        if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es mayor')
    }
        if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor')
    }
intentos ++;
limpiarCaja();
}

    return;
}


function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //
 
// si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los numeros posibles');
        alert('ya wey');
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }
        else {
        listaNumerosSorteados.push(numeroGenerado);  
        console.log(listaNumerosSorteados);
        return numeroGenerado;
        }
}

}


function limpiarCaja(){
  let valorCaja =  document.querySelector('#valorUsuario');
  valorCaja.value='';
}



function condicionesIniciales(){
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto=generarNumeroSecreto(); 
console.log(numeroSecreto);
intentos=1;

}
function reiniciarJuego(){
    //Limpiar caja
limpiarCaja();
    //indicar mensaje
condicionesIniciales();
    //generar el numero aleatorio
    
    //desabiliar boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','tue')
    //inicializar el numero de intentos
   


}
condicionesIniciales();



