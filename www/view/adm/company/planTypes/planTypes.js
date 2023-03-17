

function openSelecPlanTypes(){
    if (validCreateCompanyData){
        showLoader("alertBoraBeberLoader", 'Carregando Opções...')
        MobileUI.ajax.get(url + '/getmodules')
        .query('modulesId=62017d56cd4b0477038c05d9')
        .send()
        .then(function (res){
        MODULES = res.body.data.types
        openPage('./view/adm/company/planTypes/selectPlanTypes', function(){
            setTimeout(function(){
                setIdHidden('customImgAlert')
            },300)
        })
    })
    }    
}

function validSelectedModule(){    
    var validate = false
    MODULES.map(function(MODULES, i){
        if (document.getElementById(MODULES.type + MODULES.subscription0.name).checked){
            validate = true
            setModules(MODULES.type, MODULES.subscription0.name, MODULES.subscription0.price)
        }
        if (document.getElementById(MODULES.type + MODULES.subscription1.name).checked){
            validate = true
            setModules(MODULES.type, MODULES.subscription1.name, MODULES.subscription1.price)
        }
        if (document.getElementById(MODULES.type + MODULES.subscription2.name).checked ){
            validate = true
            setModules(MODULES.type, MODULES.subscription2.name, MODULES.subscription2.price)
        }
        if (!validate){
            validate = false
        }
    })
    return validate
}

function seeavailabilityModule(){
    MODULES = MODULES.filter(function(MODULES, i){
        if (MODULES.availability){
            return MODULES
        }
    })
}


function setModules(type, module, price){
    companyModules.push({
        "subscription" : type,
        "module" : module,
        "value" : price
    })
}


function checkoutOpenPage(){
    
    if (validSelectedModule()){
        openPage('./view/adm/company/checkout/checkout', function(){
            MobileUI.formByObject('formCheckout', {
                companyFrontCardNumber : '1111 1111 1111 1111',
                companyFrontCardExpiration : `11/11`,
                companyFrontCardCvC : '111',
                companyFrontCardName : 'Alexandre Muzulão',
                companyFrontCardDoc : '07353701927',
                companyFrontCardAlias : 'Card BoraBeber'
            })

            $("#companyFrontCardNumber").mask("9999 9999 9999 9999");
            $("#companyFrontCardCvC").mask("9999");
            $("#companyFrontCardExpiration").mask("99/99");
            setMaskCpfCNPJ('#companyFrontCardDoc')
        })
    } else {
        toastCender('Selecione ao menos um módulo!')
    }
    
}