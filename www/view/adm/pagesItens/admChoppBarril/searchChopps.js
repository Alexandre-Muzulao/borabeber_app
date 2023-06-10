function getAllCHOPPSs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLCHOPPS.length == 0){
        MobileUI.ajax.get(url + '/getCHOPPSs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                CHOPPSs = []
                ALLCHOPPS = res.body.data
                searchCHOPPS(ALLCHOPPS)
                parseAdmCHOPPS(ALLCHOPPS)
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
            searchCHOPPS(ALLCHOPPS)
            // parseAdmCHOPPS(ALLCHOPPS)
        })
    }
}

function searchCHOPPS(CHOPPSs){
    ALLCHOPPS_OLD = CHOPPSs
    
    $(document).ready(function(){
        $("#marcaCHOPPS").keyup(function(){
            var searchVal = $("#marcaCHOPPS").val()
            if (searchVal.length > 0){
                ALLCHOPPS = []
                for (var i=0 ; i < ALLCHOPPS_OLD.length ; i++)
                {
                    if (validUndefined(ALLCHOPPS_OLD[i])){
                        ifCHOPPSExists(ALLCHOPPS_OLD[i], searchVal, i)
                        // CHOPPSPushIfNotExist(ifCHOPPSExists(ALLCHOPPS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLCHOPPS = ALLCHOPPS_OLD
            }

        })
    })
}

function CHOPPSPushIfNotExist(CHOPPS){
    for (var i=0; i < ALLCHOPPS; i++){
        if(CHOPPS.tituloCHOPPSPar !== ALLCHOPPS[i].tituloCHOPPSPar){
            ALLCHOPPS.push(CHOPPS)
        }
        if(CHOPPS.tituloCHOPPSImpar !== ALLCHOPPS[i].tituloCHOPPSImpar){
            ALLCHOPPS.push(CHOPPS)
        }
    }
}

function validUndefined(CHOPPS){
    if (CHOPPS !== undefined){
        return true
    }
}

function ifCHOPPSExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloCHOPPSPar.toLowerCase().includes(search.toLowerCase())){
            ALLCHOPPS.push(item)
        }
        // if (item.tituloCHOPPSImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLCHOPPS.push(item)
        // }
    }   
}