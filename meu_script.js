
var inputOrigem = document.querySelector('#unidade-1')
var inputDestino = document.querySelector('#unidade-2')
var selectOrigem = document.querySelector('.select-origem')
var selectDestino = document.querySelector('.select-destino')
var calculoOrigem = 1
var calculoDestino = 1
selectOrigem.value = 'Real'
selectDestino.value = 'Dolar'


var inputOrigemSalvo = selectOrigem.value
var inputDestinoSalvo = selectDestino.value

var fatores = {
    'Real' : {
        'Dolar' : 5,
        'Euro' : 6.25
    },
    'Euro' : {
        'Real' : 0.16,
        'Dolar' : 0.8 
    },
    'Dolar' : {
        'Real' : 0.20,
        'Euro' : 1.25
    }
}

inputOrigem.addEventListener('input',(event) =>converteValorOrigem(event))
inputDestino.addEventListener('input',(event) =>converteValorDestino(event))
selectOrigem.addEventListener('change',(event)=>mudarSelect())
selectOrigem.addEventListener('click',(event)=>inputOrigemSalvo = event.target.value)
selectDestino.addEventListener('click',(event)=>inputDestinoSalvo = event.target.value)
selectDestino.addEventListener('change',(event)=>mudarSelectDestino())




function converteValorOrigem(recebido){
    inputDestino.value = recebido.target.value * (fatores[selectDestino.value][selectOrigem.value])
}

function converteValorDestino(recebido){
    inputOrigem.value = recebido.target.value * (fatores[selectOrigem.value][selectDestino.value])
}
function print(recebido){
    console.log(recebido)
}
function mudarSelect(){
    
    if(selectOrigem.value == selectDestino.value){
        selectDestino.value = inputOrigemSalvo
    }
    inputDestino.value = inputOrigem.value * (fatores[selectDestino.value][selectOrigem.value])

}
function mudarSelectDestino(){
    if(selectOrigem.value == selectDestino.value){
        selectOrigem.value = inputDestinoSalvo
    }
    inputDestino.value = inputOrigem.value * (fatores[selectDestino.value][selectOrigem.value])


}