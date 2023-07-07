function getAllVinhos(){
  showLoader("alertBoraBeberLoader", 'Buscando os Vinhos na depósito')
    if (ALLVINHOS == undefined || ALLVINHOS.length == 0){
        MobileUI.ajax.get(url + '/getvinhos').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            setIdHidden('customImgAlert')
            alert(res.body.errorMessage)
        } else {
            setIdHidden('customImgAlert')
            openPage('./view/adm/pagesItens/admVinhos/vinhosList', function(){
                VINHOSs = []
                ALLVINHOS = res.body.data
                searchVinhos(ALLVINHOS)
                parseAdmVinhos(ALLVINHOS)
            })
        }
        }).catch(function(err) {
            setIdHidden('customImgAlert')
            alert('Ops! Tive um problema para encontrar a cerveja no Freezer! Vamos tentar novamente daqui a pouco.')
            console.log(err)
        })
    } else {
        setIdHidden('customImgAlert')
        openPage('./view/adm/pagesItens/admVinhos/vinhosList', function(){
            searchVinhos(ALLVINHOS)
            // parseAdmVinhos(ALLVINHOS)
        })
    }
}

function searchVinhos(VINHOSs){
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