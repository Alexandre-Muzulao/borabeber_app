function getAllVINHOSs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLVINHOS.length == 0){
        MobileUI.ajax.get(url + '/getVINHOSs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                VINHOSs = []
                ALLVINHOS = res.body.data
                searchVINHOS(ALLVINHOS)
                parseAdmVINHOS(ALLVINHOS)
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
            searchVINHOS(ALLVINHOS)
            // parseAdmVINHOS(ALLVINHOS)
        })
    }
}

function searchVINHOS(VINHOSs){
    ALLVINHOS_OLD = VINHOSs
    
    $(document).ready(function(){
        $("#marcaVINHOS").keyup(function(){
            var searchVal = $("#marcaVINHOS").val()
            if (searchVal.length > 0){
                ALLVINHOS = []
                for (var i=0 ; i < ALLVINHOS_OLD.length ; i++)
                {
                    if (validUndefined(ALLVINHOS_OLD[i])){
                        ifVINHOSExists(ALLVINHOS_OLD[i], searchVal, i)
                        // VINHOSPushIfNotExist(ifVINHOSExists(ALLVINHOS_OLD[i], searchVal))
                    }
                }
            } else {
                ALLVINHOS = ALLVINHOS_OLD
            }

        })
    })
}

function VINHOSPushIfNotExist(VINHOS){
    for (var i=0; i < ALLVINHOS; i++){
        if(VINHOS.tituloVINHOSPar !== ALLVINHOS[i].tituloVINHOSPar){
            ALLVINHOS.push(VINHOS)
        }
        if(VINHOS.tituloVINHOSImpar !== ALLVINHOS[i].tituloVINHOSImpar){
            ALLVINHOS.push(VINHOS)
        }
    }
}

function validUndefined(VINHOS){
    if (VINHOS !== undefined){
        return true
    }
}

function ifVINHOSExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloVINHOSPar.toLowerCase().includes(search.toLowerCase())){
            ALLVINHOS.push(item)
        }
        // if (item.tituloVINHOSImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLVINHOS.push(item)
        // }
    }   
}