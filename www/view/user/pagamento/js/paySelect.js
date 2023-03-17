function paySelect(payType){
    changeSelectedPayType(payType)
    setPayFormat(payType)
}

function showPaymentDivisionPeople(){
    var status = document.getElementById('payOptionPeopleDivide').checked
    setSplit(status)
    status ? MobileUI.show('payPeopleDivision') : MobileUI.hide('payPeopleDivision')
    setSplitTot()
}