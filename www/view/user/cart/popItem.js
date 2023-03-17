function popValItem(item){
    var total = ITENSCART[item].precoInt + '.' + ITENSCART[item].precoCent
    var value = findBeerValue(ITENSCART[item].titulo, ITENSCART[item].medida)
    var result = (parseFloat(total) - parseFloat(value[0].int + '.' + value[0].cent)).toFixed(2)
    ITENSCART[item].precoInt = result.toString().split(".")[0]
    ITENSCART[item].precoCent = result.toString().split(".")[1]
}


function popValToCart(item){
    var cartValue = CART.vTotalInt + '.' + CART.vTotalCent
    
    var value = findBeerValue(ITENSCART[item].titulo, ITENSCART[item].medida)
    var result = (parseFloat(cartValue) - parseFloat(value[0].int + '.' + value[0].cent)).toFixed(2)
        
    CART.vTotalInt = result.toString().split(".")[0]
    CART.vTotalCent = result.toString().split(".")[1]
    payValueTot(CART.vTotalInt, CART.vTotalCent)
}

function remQtdUnid(id, precoInt, precoCent){
    for (i = 0; i < ITENSCART.length; i++){
        if (id == ITENSCART[i].id){
            ITENSCART[i].qtd--
            ITENSCART[i].qtdTotal--
            popValToCart(i)
            popValItem(i)
            if (ITENSCART[i].qtdTotal == 0){
                remItem(id)
            }
        }
    }
}

function remItem(id){    
    for (i = 0; i < ITENSCART.length; i++){
        if (id == ITENSCART[i].id){
            if (CART.qtd <= 1) {
                CART = {
                    qtdCaixas: "0",
                    qtd : "0",
                    vTotalInt : "0",
                    vTotalCent : "00"
                }
                ITENSCART.splice(i, 1)
                returnToHome()
            } else {
                CART.qtd--
                ITENSCART.splice(i, 1)
            }
        }
    }
}

function popItemOfCart(id){
    var valInCart = 0.00
    for (i = 0; i < ITENSCART.length; i++){
        if (id == ITENSCART[i].id){
            valInCart = parseValInFloat(ITENSCART[i].precoInt, ITENSCART[i].precoCent)
            valTotalCart = parseValInFloat(CART.vTotalInt, CART.vTotalCent)
            result = parseFloat(valTotalCart - valInCart).toFixed(2)
            CART.vTotalInt = result.toString().split(".")[0]
            CART.vTotalCent = result.toString().split(".")[1]
            payValueTot(CART.vTotalInt, CART.vTotalCent)
        }
    }    
}

function trash(id){
    try {
        popItemOfCart(id)
        remItem(id)
        freeBeer(id)
        openToast({
            message: 'Item Removido do carrinho!',
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
        })   
    } catch (error) {
        // openToast({
        //     message: error,
        //     position: 'center',
        //     class: 'full text-big text-strong black-opacity-70 text-white radius',
        // })
        console.log(error)
    }
}
