function paySelect(payType){
    changeSelectedPayType(payType)
}

function showPaymentDivisionPeople(){
    var status = document.getElementById('payOptionPeopleDivide').checked
    status ? MobileUI.show('payPeopleDivision') : MobileUI.hide('payPeopleDivision')
}