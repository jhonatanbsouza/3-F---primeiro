const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date(2025,10,30,20)
const tempoObjetivo2 = new Date(2025,10,30,20)
const tempoObjetivo3 = new Date(2025,10,30,20)
const tempoObjetivo4 = new Date(2025,10,30,20)

function calculaTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dias
    segundos = (tempoObjetivo - agora)/1000
    minutos = segundos/60
    horas = minutos/60
    dias = horas/24
    segundos = Math.floor(segundos)
    minutos = Math.floor(minutos)
    horas = Math.floor(horas)
    dias = Math.floor(dias)

    segundos = segundos%60
    minutos = minutos%60
    horas = horas%24
}

// Definimos variáveis
// Fazemos calculos usando as variáveis que criamos e o tempoObjetivo junto com agora
contador[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segunds`
for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}