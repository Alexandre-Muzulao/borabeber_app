var PAGAMENTO = {
    "paySelect" : "",
    "paySplit" : false,
    "payCountSplit" : 0,
    "payValueSplit" : 0.00,
    "payValuePag" : 0.00,
    "payValueChange" : 0.00,
    "payValueSubTot" : 0.00,
    "payValueTot" : 0.00,
    "payDeliveryTaxi" : 0.00,
    "payResumTitle" : "",
    "payResumValue" : ""
}


function setPayFormat(paySelect){
    if (paySelect == "payedCard") {
        PAGAMENTO.paySelect = "Cartão"
    } else {        
        PAGAMENTO.paySelect = "Dinheiro"
    }
}

function setSplit(paySplit){
    PAGAMENTO.paySplit = paySplit  
    if (!paySplit){
        PAGAMENTO.payCountSplit = 0
        PAGAMENTO.payValueSplit = '0.00'
    }
}

function setSplitDetail(countSplit, valueSplit){
    PAGAMENTO.payCountSplit = countSplit
    PAGAMENTO.payValueSplit = valueSplit
}

function payValueTot(vint, vCent){
    PAGAMENTO.payValueSubTot = vint + "." + vCent
}

function setMessagePayResume(){    
    switch (PAGAMENTO.paySplit) {
        case true:
            setMsgSplit()
            break;
        case false:
            setMsgNotSplit()
            break;
    }
}

function setMsgSplit(){
    switch (PAGAMENTO.paySelect) {
        case "Cartão":
            PAGAMENTO.payResumTitle = 
            "Dividido em:" + "<br>" +
            "Total por Pessoa:" + "<br>"
        
            PAGAMENTO.payResumValue = PAGAMENTO.payCountSplit + "<br>" +
            PAGAMENTO.payValueSplit + "<br>"
            break;
        case "Dinheiro":
            PAGAMENTO.payResumTitle = 
            "Dividido em:" + "<br>" +
            "Total por Pessoa:" + "<br>" +
            "Total em Dinheiro:" + "<br>" +
            "Troco:"
        
            PAGAMENTO.payResumValue = PAGAMENTO.payCountSplit + "<br>" +
            PAGAMENTO.payValueSplit + "<br>" + 
            PAGAMENTO.payValuePag + "<br>" + 
            PAGAMENTO.payValueChange
            break;
    }

}

function setMsgNotSplit(){
    switch (PAGAMENTO.paySelect) {
        case "Cartão":
            PAGAMENTO.payResumTitle = "Forma de Pagamento:"
            // "" + "<br>" +
            // "" + "<br>"
        
            PAGAMENTO.payResumValue = "Cartão" + "<br>" 
            // PAGAMENTO.payCountSplit + "<br>" +
            // PAGAMENTO.payValueSplit + "<br>"            
            break;
        case "Dinheiro":
            PAGAMENTO.payResumTitle = "Forma de Pagamento:" + "<br>" +
            "Total em Dinheiro:" + "<br>" +
            "Troco:"
        
            PAGAMENTO.payResumValue = "Dinheiro" + "<br>" + 
            PAGAMENTO.payValuePag + "<br>" + 
            PAGAMENTO.payValueChange
            break;
    }
}


function validPayFormat(){
    var msgReturn = ""
    var retBolean = true
    var payedStyle = {
        "card" : document.getElementById('payedCard').style,
        "cash" : document.getElementById('payedCash').style
    }  

    if(payedStyle.card.backgroundColor !== 'rgb(102, 102, 102)' && payedStyle.cash.backgroundColor !== 'rgb(102, 102, 102)'){
        msgReturn = "Escolha entre Cartão e Dinheiro !!"
        retBolean = false
        return { msgReturn, retBolean }
    }

    if(payedStyle.cash.backgroundColor == 'rgb(102, 102, 102)'){
        if (parseFloat(PAGAMENTO.payValuePag) < parseFloat(PAGAMENTO.payValueTot)){
            msgReturn = "Valor em Dinheiro deve ser maior ou igual ao Valor tota !"
            retBolean = false
            return { msgReturn, retBolean }
        } else {
            retBolean = true
            return { msgReturn, retBolean }
        }
    } else {
        retBolean = true
        return { msgReturn, retBolean }
    }   
}

function loadDeliveryPage(){
    // openPage('./view/user/pedido/pedido.html', function(){
    //     setMessagePayResume()
    // })
    
    var retValidation = validPayFormat()

    if (retValidation.retBolean){
        openPage('./view/user/pedido/pedido.html', function(){
            setMessagePayResume()
        })
    } else {
        openToast({
            message: retValidation.msgReturn,
            position: 'center',
            class: 'full text-big text-strong black-opacity-70 text-white radius',
        })
    }

}