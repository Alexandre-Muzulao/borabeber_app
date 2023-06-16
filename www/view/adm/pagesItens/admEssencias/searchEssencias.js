function getAllESSENCIASs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLESSENCIAS.length == 0){
        MobileUI.ajax.get(url + '/getESSENCIASs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                ESSENCIASs = []
                ALLESSENCIAS = res.body.data
                searchESSENCIAS(ALLESSENCIAS)
                parseAdmESSENCIAS(ALLESSENCIAS)
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
            searchESSENCIAS(ALLESSENCIAS)
            // parseAdmESSENCIAS(ALLESSENCIAS)
        })
    }
}

function searchESSENCIAS(ESSENCIASs){
    ALLESSENCIAS_OLD = ESSENCIASs
    
    $(document).ready(function(){
        $("#marcaESSENCIAS").keyup(function(){
            var searchVal = $("#marcaESSENCIAS").val()
            if (searchVal.length > 0){
                ALLESSENCIAS = []
                for (var i=0 ; i < ALLESSENCIAS_OLD.length ; i++)
                {
                    if (validUndefined(ALLESSENCIAS_OLD[i])){
                        ifESSENCIASExists(ALLESSENCIAS_OLD[i], searchVal, i)
                        // ESSENCIASPushIfNotExist(ifESSENCIASExists(ALLESSENCIAS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLESSENCIAS = ALLESSENCIAS_OLD
            }

        })
    })
}

function ESSENCIASPushIfNotExist(ESSENCIAS){
    for (var i=0; i < ALLESSENCIAS; i++){
        if(ESSENCIAS.tituloESSENCIASPar !== ALLESSENCIAS[i].tituloESSENCIASPar){
            ALLESSENCIAS.push(ESSENCIAS)
        }
        if(ESSENCIAS.tituloESSENCIASImpar !== ALLESSENCIAS[i].tituloESSENCIASImpar){
            ALLESSENCIAS.push(ESSENCIAS)
        }
    }
}

function validUndefined(ESSENCIAS){
    if (ESSENCIAS !== undefined){
        return true
    }
}

function ifESSENCIASExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloESSENCIASPar.toLowerCase().includes(search.toLowerCase())){
            ALLESSENCIAS.push(item)
        }
        // if (item.tituloESSENCIASImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLESSENCIAS.push(item)
        // }
    }   
}