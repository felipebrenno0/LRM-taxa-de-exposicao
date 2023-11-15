const taxaPassagem = document.getElementsByClassName("taxa")
const resultado = document.querySelector(".container-resultado")
const tempoInspecao = document.getElementById("tempo-inpecao")

const meuInput = document.getElementById("container-taxa");

function ativarBotao(){
    
    const medicoes =  obterTaxas()

    const taxaExposicao = calcularTaxa(medicoes)
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

function obterTaxas(taxas){
    taxas = taxaPassagem
    let valoresTaxas = []

    for(let i = 0; i < taxas.length; i++){
        let inputs = taxas[i].getElementsByTagName("input")
        for (let j = 0; j < inputs.length; j++){
            valoresTaxas.push(inputs[j].value)
            
        }
    }
    const numeros = valoresTaxas.map((x)=>{
        return parseFloat(x)
    })

    return numeros.reduce((x, y)=> x + y)
}

function removerElementoAntigo(){
    let elementoAntigo = document.getElementById("meuElemento")
    if(elementoAntigo){
        elementoAntigo.remove()
    }
}

meuInput.addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) {
      // Chama a função quando Enter é pressionado
      ativarBotao();
    }
  });