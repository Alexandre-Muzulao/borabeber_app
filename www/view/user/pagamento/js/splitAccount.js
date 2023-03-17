var PAG = {
    qtdPessoas : 2,
    vTotal: 0.00,
    vPart: 0.00
}

var SPLIT = {
    value : 0.00
}

var CHANGE = {
    value : 0.00
}

function setSplitTot(){
    var vTotSplited = (parseFloat(CART.vTotalInt + '.' + CART.vTotalCent) / PAG.qtdPessoas).toFixed(2)
    setSplitDetail(parseInt(PAG.qtdPessoas), vTotSplited)
    var splitCartValue = document.getElementById('splitCartValue')
    SPLIT.value = vTotSplited.replace('.',',')
    splitCartValue.classList.add('focus')
}

function addPaying(){
    PAG.qtdPessoas++
    document.getElementById('splitValue').value = PAG.qtdPessoas
    setSplitTot()
}

function remPaying(){
    if (PAG.qtdPessoas !== 2){
        PAG.qtdPessoas--
        document.getElementById('splitValue').value = PAG.qtdPessoas
        setSplitTot()
    } else {
        openToast({
            message: 'Divisão minima deve ser por 2 !',
            class: 'full text-big text-strong black-opacity-70 text-white',
            position: 'center',
        })
    }
}

function calcChange(){
    var vPag = parseFloat(document.getElementById('payValueCash').value).toFixed(2)
    var vTot = (parseFloat(CART.vTotalInt + '.' + CART.vTotalCent)).toFixed(2)
    var troco = (parseFloat(vTot - vPag) * -1)
    PAGAMENTO.payValuePag = vPag.replace(',','.')
    PAGAMENTO.payValueChange = troco.toFixed(2)
    CHANGE.value = troco.toFixed(2).replace('.',',')
}
