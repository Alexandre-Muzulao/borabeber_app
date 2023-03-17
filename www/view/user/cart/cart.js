var CART = {
    qtdCaixas: "0",
    qtd : "0",
    vTotalInt : "0",
    vTotalCent : "00"
}

var ITENSCART = []
var ITENSCART = []
var BEERVALUES = []
var VODKAVALUES = []
var WHISKYVALUES = []


function addItemCart(tpItem, titulo, recipiente, medida, imagem, precoInt, precoCent, id){
    if (findBeerInCart(id) == false){
        openToast({
            message: titulo + ' ' + recipiente + ' ' + medida + ' está no carrinho!',
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
        })            
    
        CART.qtd++
        pushValToCart(precoInt, precoCent, 1, 1)
        
        ITENSCART.push({
            titulo, recipiente, medida, imagem, precoInt, precoCent, qtd : 1, qtdTotal : 1, qtdCaixas : "0", id
        })
    
        BEERVALUES.push({
            titulo, recipiente, medida, imagem, precoInt, precoCent, qtd : 1, qtdTotal : 1, qtdCaixas : "0", id
        })
        setInCart(id)
    } else {
        openToast({
            message: titulo + ' ' + recipiente + ' ' + medida + ' Já está no carrinho!',
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
        })
    }
}

function findBeerValue(titulo, medida){
    for (i = 0; i < BEERVALUES.length; i++){
        if (titulo == BEERVALUES[i].titulo && medida == BEERVALUES[i].medida){
            return [{
                int : BEERVALUES[i].precoInt,
                cent: BEERVALUES[i].precoCent
            }]
        }
    }
}
