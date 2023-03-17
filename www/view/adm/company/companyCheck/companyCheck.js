function setCardDataCach(){
    COMPANYCACH.dataCards.cardNumber = document.getElementById('companyFrontCardNumber').value
    COMPANYCACH.dataCards.cardName = document.getElementById('companyFrontCardName').value
    COMPANYCACH.dataCards.cardExpired = document.getElementById('companyFrontCardExpiration').value
    COMPANYCACH.dataCards.cardCVC = document.getElementById('companyFrontCardCvC').value
}

function calcPlanValue(){
    var sum = 0.00
    companyModules.map(function(companyModules, i){
        sum = sum + parseFloat(companyModules.value)
    })
    
    var descSemestral = ((sum * 6) * 0.15).toFixed(2)
    var descAnual = ((sum * 12) * 0.25).toFixed(2)        

    var semestral = ((sum * 6) - descSemestral)
    var anual = ((sum * 12) - descAnual)
    

    COMPANYCACH.billings.recorrente = sum.toFixed(2)
    COMPANYCACH.billings.semestral = semestral.toFixed(2)
    COMPANYCACH.billings.descSemestral = descSemestral
    COMPANYCACH.billings.anual = anual.toFixed(2)
    COMPANYCACH.billings.descAnual = descAnual
}

function popModuleOfPlan(subscription){// Criar função para desmarcar automático na página de módulos
    let n = 0
    companyModules.map(function(companyModules, i){
        if (companyModules.subscription == subscription){            
            n = i
        }
    })
    companyModules.splice(n, 1)
    calcPlanValue()
}

function setPlanRecorrence(){
    let recorence = ''
    if (document.getElementById('planomensal').checked) {
        recorence = 'mensal'
    }
    if (document.getElementById('planosemestral').checked){
        recorence = 'semestral'
    }
    if (document.getElementById('planoanual').checked){
        recorence = 'anual'
    }
    COMPANYCACH.billings.recorrence = recorence
}