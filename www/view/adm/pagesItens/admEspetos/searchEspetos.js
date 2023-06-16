function getAllESPETOs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLESPETO.length == 0){
        MobileUI.ajax.get(url + '/getESPETOs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                ESPETOs = []
                ALLESPETO = res.body.data
                searchESPETO(ALLESPETO)
                parseAdmESPETO(ALLESPETO)
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
            searchESPETO(ALLESPETO)
            // parseAdmESPETO(ALLESPETO)
        })
    }
}

function searchESPETO(ESPETOs){
    ALLESPETO_OLD = ESPETOs
    
    $(document).ready(function(){
        $("#marcaESPETO").keyup(function(){
            var searchVal = $("#marcaESPETO").val()
            if (searchVal.length > 0){
                ALLESPETO = []
                for (var i=0 ; i < ALLESPETO_OLD.length ; i++)
                {
                    if (validUndefined(ALLESPETO_OLD[i])){
                        ifESPETOExists(ALLESPETO_OLD[i], searchVal, i)
                        // ESPETOPushIfNotExist(ifESPETOExists(ALLESPETO_OLD[i], searchVal))
                    }
                }
            } else {
                ALLESPETO = ALLESPETO_OLD
            }

        })
    })
}

function ESPETOPushIfNotExist(ESPETO){
    for (var i=0; i < ALLESPETO; i++){
        if(ESPETO.tituloESPETOPar !== ALLESPETO[i].tituloESPETOPar){
            ALLESPETO.push(ESPETO)
        }
        if(ESPETO.tituloESPETOImpar !== ALLESPETO[i].tituloESPETOImpar){
            ALLESPETO.push(ESPETO)
        }
    }
}

function validUndefined(ESPETO){
    if (ESPETO !== undefined){
        return true
    }
}

function ifESPETOExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloESPETOPar.toLowerCase().includes(search.toLowerCase())){
            ALLESPETO.push(item)
        }
        // if (item.tituloESPETOImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLESPETO.push(item)
        // }
    }   
}