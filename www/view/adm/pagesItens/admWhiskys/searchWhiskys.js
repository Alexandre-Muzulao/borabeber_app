function getAllWISKISs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLWISKIS.length == 0){
        MobileUI.ajax.get(url + '/getWISKISs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                WISKISs = []
                ALLWISKIS = res.body.data
                searchWISKIS(ALLWISKIS)
                parseAdmWISKIS(ALLWISKIS)
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
            searchWISKIS(ALLWISKIS)
            // parseAdmWISKIS(ALLWISKIS)
        })
    }
}

function searchWISKIS(WISKISs){
    ALLWISKIS_OLD = WISKISs
    
    $(document).ready(function(){
        $("#marcaWISKIS").keyup(function(){
            var searchVal = $("#marcaWISKIS").val()
            if (searchVal.length > 0){
                ALLWISKIS = []
                for (var i=0 ; i < ALLWISKIS_OLD.length ; i++)
                {
                    if (validUndefined(ALLWISKIS_OLD[i])){
                        ifWISKISExists(ALLWISKIS_OLD[i], searchVal, i)
                        // WISKISPushIfNotExist(ifWISKISExists(ALLWISKIS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLWISKIS = ALLWISKIS_OLD
            }

        })
    })
}

function WISKISPushIfNotExist(WISKIS){
    for (var i=0; i < ALLWISKIS; i++){
        if(WISKIS.tituloWISKISPar !== ALLWISKIS[i].tituloWISKISPar){
            ALLWISKIS.push(WISKIS)
        }
        if(WISKIS.tituloWISKISImpar !== ALLWISKIS[i].tituloWISKISImpar){
            ALLWISKIS.push(WISKIS)
        }
    }
}

function validUndefined(WISKIS){
    if (WISKIS !== undefined){
        return true
    }
}

function ifWISKISExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloWISKISPar.toLowerCase().includes(search.toLowerCase())){
            ALLWISKIS.push(item)
        }
        // if (item.tituloWISKISImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLWISKIS.push(item)
        // }
    }   
}