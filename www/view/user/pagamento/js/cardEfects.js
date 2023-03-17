function changeSelectedPayType(payType){
    var type = document.getElementById(payType).style
    type.backgroundColor = '#666666'
    var card = document.getElementById('payedCard').style
    var cash = document.getElementById('payedCash').style

    if (payType == 'payedCard') {
        cash.backgroundColor = ''
        setIdVisible('payedCardFlag')
        setIdHidden('payedCashChange')

    } else {
        card.backgroundColor = ''
        setIdHidden('payedCardFlag')
        setIdVisible('payedCashChange')
    }
}
