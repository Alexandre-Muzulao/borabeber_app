function getAllCOMBUSTIVELs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLCOMBUSTIVEL.length == 0){
        MobileUI.ajax.get(url + '/getCOMBUSTIVELs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                COMBUSTIVELs = []
                ALLCOMBUSTIVEL = res.body.data
                searchCOMBUSTIVEL(ALLCOMBUSTIVEL)
                parseAdmCOMBUSTIVEL(ALLCOMBUSTIVEL)
            })
        }
        }).catch(function(err) {
            closeLoading()
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        closeLoading()
        openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
            searchCOMBUSTIVEL(ALLCOMBUSTIVEL)
            // parseAdmCOMBUSTIVEL(ALLCOMBUSTIVEL)
        })
    }
}

function searchCOMBUSTIVEL(COMBUSTIVELs){
    ALLCOMBUSTIVEL_OLD = COMBUSTIVELs
    
    $(document).ready(function(){
        $("#marcaCOMBUSTIVEL").keyup(function(){
            var searchVal = $("#marcaCOMBUSTIVEL").val()
            if (searchVal.length > 0){
                ALLCOMBUSTIVEL = []
                for (var i=0 ; i < ALLCOMBUSTIVEL_OLD.length ; i++)
                {
                    if (validUndefined(ALLCOMBUSTIVEL_OLD[i])){
                        ifCOMBUSTIVELExists(ALLCOMBUSTIVEL_OLD[i], searchVal, i)
                        // COMBUSTIVELPushIfNotExist(ifCOMBUSTIVELExists(ALLCOMBUSTIVEL_OLD[i], searchVal))
                    }
                }
            } else {
                ALLCOMBUSTIVEL = ALLCOMBUSTIVEL_OLD
            }

        })
    })
}

function COMBUSTIVELPushIfNotExist(COMBUSTIVEL){
    for (var i=0; i < ALLCOMBUSTIVEL; i++){
        if(COMBUSTIVEL.tituloCOMBUSTIVELPar !== ALLCOMBUSTIVEL[i].tituloCOMBUSTIVELPar){
            ALLCOMBUSTIVEL.push(COMBUSTIVEL)
        }
        if(COMBUSTIVEL.tituloCOMBUSTIVELImpar !== ALLCOMBUSTIVEL[i].tituloCOMBUSTIVELImpar){
            ALLCOMBUSTIVEL.push(COMBUSTIVEL)
        }
    }
}

function validUndefined(COMBUSTIVEL){
    if (COMBUSTIVEL !== undefined){
        return true
    }
}

function ifCOMBUSTIVELExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloCOMBUSTIVELPar.toLowerCase().includes(search.toLowerCase())){
            ALLCOMBUSTIVEL.push(item)
        }
        // if (item.tituloCOMBUSTIVELImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLCOMBUSTIVEL.push(item)
        // }
    }   
}