function setLabelText(text, label){
    // console.log(text, label)
    var labelCard = document.getElementById(text)    
    
    setTimeout(function(){
        document.getElementById(label).innerHTML = labelCard.value.toString();
        validationsLabelCard(label)
    }, 1);
}

function validationsLabelCard(label){
    switch (label) {
        case 'companyImgCardNumber':
            var numCardLen = $("#companyFrontCardNumber").val().length;
            if (numCardLen == 0){
                document.getElementById('companyImgCardNumber').innerHTML = "**** **** **** ****"
            }

            break;
        case 'companyImgCardValid':
            var validCardLen = $("#companyFrontCardExpiration").val().length;
            if (validCardLen == 0){
                document.getElementById('companyImgCardValid').innerHTML = "MM/AA"
            }
            break;
        case 'companyImgCardCVC':            
            document.getElementById("switch").checked = true
            var cvcCard = $("#companyFrontCardCvC").val();
            var cvcCardLen = $("#companyFrontCardCvC").val().length;
            if(cvcCard == "" || cvcCardLen == 3){
                document.getElementById("switch").checked = false
            }            
                                                
            break;
        default:
            break;
    }
}

function companycheckOpenPage(){
    if (validCheckoutData()){
        setCardDataCach()
        calcPlanValue()
        openPage('./view/adm/company/companyCheck/companyCheck', function(){ 
            MobileUI.formByObject('companyCheckContent', {
                docCompanyCheck : COMPANYCACH.cnpjCompany,
                nomeCompanyCheck : COMPANYCACH.nomeCompany
            })
            document.getElementById('companyImgCardNumberCheck').innerText = COMPANYCACH.dataCards.cardNumber
            document.getElementById('companyImgCardNameCheck').innerText = COMPANYCACH.dataCards.cardName
            document.getElementById('companyImgCardValidCheck').innerText = COMPANYCACH.dataCards.cardExpired
            document.getElementById('companyImgCardCVCCheck').innerText = COMPANYCACH.dataCards.cardCVC
        })    
    }
}
