function pushValItem(item, qtd){
    var itemValue = BEERVALUES[item].precoInt + '.' + BEERVALUES[item].precoCent
    var itemCart = ITENSCART[item].precoInt + '.' + ITENSCART[item].precoCent
    
    if (qtd == 1){
        var result = (parseFloat(itemCart) + parseFloat(itemValue)).toFixed(2)
    } else  {
        var result = (parseFloat(itemValue) * parseInt(qtd)).toFixed(2)
    }
    
    
    ITENSCART[item].precoInt = result.toString().split(".")[0]
    ITENSCART[item].precoCent = result.toString().split(".")[1]
}

function pushValToCart(int, cent, qtd, item){    
    var cartValue = CART.vTotalInt + '.' + CART.vTotalCent
    var itemValue = 0.00
    
    if (qtd == '1'){
        itemValue = int + '.' + cent
    } else {
        itemValue = BEERVALUES[item].precoInt + '.' + BEERVALUES[item].precoCent
    }    

    var result = (parseFloat(cartValue) + parseFloat(itemValue)).toFixed(2)
    
    CART.vTotalInt = result.toString().split(".")[0]
    CART.vTotalCent = result.toString().split(".")[1]
    payValueTot(CART.vTotalInt, CART.vTotalCent)
}

function addQtdUnid(id, precoInt, precoCent, qtd){    

    for (i = 0; i < ITENSCART.length; i++){
        if (id == ITENSCART[i].id){
            if(qtd == '1'){
                ITENSCART[i].qtd++
                ITENSCART[i].qtdTotal++
            } else {
                ITENSCART[i].qtd = ITENSCART[i].qtd * qtd
                ITENSCART[i].qtdTotal = ITENSCART[i].qtdTotal * qtd
            }
            pushValItem(i, qtd)
            pushValToCart(precoInt, precoCent, ITENSCART[i].qtd, i)
        }
    }
    
}
