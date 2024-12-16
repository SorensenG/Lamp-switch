const buttonLigado = document.getElementById("ligada");
const buttonDesligado = document.getElementById("desligado");
const lamp = document.getElementById("lamp");
let quebrada = 0;

function quebrar(){
    lamp.src='./images/quebrada.png'
    quebrada = 1; 
    buttonDesligado.classList.remove('desligado');
    buttonLigado.classList.remove('ligada');
}

function ligar() {
    if(quebrada!=1){
        buttonLigado.classList.add('ligada'); 
        buttonDesligado.classList.remove('desligado');
        lamp.src='./images/ligada.png'
        lamp.classList.add('lampligada'); 
    }
}
function desligar(){
    if(quebrada!=1){
        buttonDesligado.classList.add('desligado');
        buttonLigado.classList.remove('ligada');
         lamp.src='./images/desligada.png'
         lamp.classList.remove('lampligada'); 
    }
}

buttonLigado.onclick = ligar;
buttonDesligado.onclick = desligar;
lamp.ondblclick=quebrar;
lamp.onmouseover = ligar;
lamp.onmouseleave = desligar;