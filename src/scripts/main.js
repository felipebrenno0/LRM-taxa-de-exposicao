const taxaPassagem = document.getElementsByClassName("taxa")
const resultado = document.querySelector(".container-resultado")
const tempoInspecao = document.getElementById("tempo-inpecao")



function ativarBotao(){
    
    const medicoes =  obterTaxas().reduce((x, y)=> x + y)

    const taxaExposicao = calcularTaxa(medicoes)
    console.log(tempoInspecao.value)
    imprimirTaxa(taxaExposicao.toFixed(3))
}

function imprimirTaxa(taxaExposicao){

    let faltouAdicionar = "Faltou adicionar uma passagem, por favor verifique."
    let deuCerto = `Dose máxima no motorista por passagem: </br> ${taxaExposicao}µSv`
    let novoElemento = document.createElement("p")
    if(taxaExposicao === "NaN"){
        novoElemento.innerHTML = faltouAdicionar
    }else{
        novoElemento.innerHTML = deuCerto
    }

    novoElemento.classList.add("resultado")
    novoElemento.id = "meuElemento"
    removerElementoAntigo()
    resultado.appendChild(novoElemento)

    
}

function calcularTaxa(valoresMedidos){
    const taxaMedia = valoresMedidos
    return ((taxaMedia / 5) * tempoInspecao.value) / 3600
}

function obterTaxas(){
    let valoresTaxas = []

    for(let i = 0; i < taxaPassagem.length; i++){
        let inputs = taxaPassagem[i].getElementsByTagName("input")
        for (let j = 0; j < inputs.length; j++){
            valoresTaxas.push(inputs[j].value)
            
        }
    }
    const numeros = valoresTaxas.map((x)=>{
        return parseFloat(x)
    })

    return numeros
}

function removerElementoAntigo(){
    let elementoAntigo = document.getElementById("meuElemento")
    if(elementoAntigo){
        elementoAntigo.remove()
    }
}
