function getAllSEMALCOOLs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLSEMALCOOL.length == 0){
        MobileUI.ajax.get(url + '/getSEMALCOOLs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                SEMALCOOLs = []
                ALLSEMALCOOL = res.body.data
                searchSEMALCOOL(ALLSEMALCOOL)
                parseAdmSEMALCOOL(ALLSEMALCOOL)
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
            searchSEMALCOOL(ALLSEMALCOOL)
            // parseAdmSEMALCOOL(ALLSEMALCOOL)
        })
    }
}

function searchSEMALCOOL(SEMALCOOLs){
    ALLSEMALCOOL_OLD = SEMALCOOLs
    
    $(document).ready(function(){
        $("#marcaSEMALCOOL").keyup(function(){
            var searchVal = $("#marcaSEMALCOOL").val()
            if (searchVal.length > 0){
                ALLSEMALCOOL = []
                for (var i=0 ; i < ALLSEMALCOOL_OLD.length ; i++)
                {
                    if (validUndefined(ALLSEMALCOOL_OLD[i])){
                        ifSEMALCOOLExists(ALLSEMALCOOL_OLD[i], searchVal, i)
                        // SEMALCOOLPushIfNotExist(ifSEMALCOOLExists(ALLSEMALCOOL_OLD[i], searchVal))
                    }
                }
            } else {
                ALLSEMALCOOL = ALLSEMALCOOL_OLD
            }

        })
    })
}

function SEMALCOOLPushIfNotExist(SEMALCOOL){
    for (var i=0; i < ALLSEMALCOOL; i++){
        if(SEMALCOOL.tituloSEMALCOOLPar !== ALLSEMALCOOL[i].tituloSEMALCOOLPar){
            ALLSEMALCOOL.push(SEMALCOOL)
        }
        if(SEMALCOOL.tituloSEMALCOOLImpar !== ALLSEMALCOOL[i].tituloSEMALCOOLImpar){
            ALLSEMALCOOL.push(SEMALCOOL)
        }
    }
}

function validUndefined(SEMALCOOL){
    if (SEMALCOOL !== undefined){
        return true
    }
}

function ifSEMALCOOLExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloSEMALCOOLPar.toLowerCase().includes(search.toLowerCase())){
            ALLSEMALCOOL.push(item)
        }
        // if (item.tituloSEMALCOOLImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLSEMALCOOL.push(item)
        // }
    }   
}