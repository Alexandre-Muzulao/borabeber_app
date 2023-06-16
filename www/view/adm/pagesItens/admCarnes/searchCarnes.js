function getAllCARNEs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLCARNE.length == 0){
        MobileUI.ajax.get(url + '/getCARNEs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                CARNEs = []
                ALLCARNE = res.body.data
                searchCARNE(ALLCARNE)
                parseAdmCARNE(ALLCARNE)
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
            searchCARNE(ALLCARNE)
            // parseAdmCARNE(ALLCARNE)
        })
    }
}

function searchCARNE(CARNEs){
    ALLCARNE_OLD = CARNEs
    
    $(document).ready(function(){
        $("#marcaCARNE").keyup(function(){
            var searchVal = $("#marcaCARNE").val()
            if (searchVal.length > 0){
                ALLCARNE = []
                for (var i=0 ; i < ALLCARNE_OLD.length ; i++)
                {
                    if (validUndefined(ALLCARNE_OLD[i])){
                        ifCARNEExists(ALLCARNE_OLD[i], searchVal, i)
                        // CARNEPushIfNotExist(ifCARNEExists(ALLCARNE_OLD[i], searchVal))
                    }
                }
            } else {
                ALLCARNE = ALLCARNE_OLD
            }

        })
    })
}

function CARNEPushIfNotExist(CARNE){
    for (var i=0; i < ALLCARNE; i++){
        if(CARNE.tituloCARNEPar !== ALLCARNE[i].tituloCARNEPar){
            ALLCARNE.push(CARNE)
        }
        if(CARNE.tituloCARNEImpar !== ALLCARNE[i].tituloCARNEImpar){
            ALLCARNE.push(CARNE)
        }
    }
}

function validUndefined(CARNE){
    if (CARNE !== undefined){
        return true
    }
}

function ifCARNEExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloCARNEPar.toLowerCase().includes(search.toLowerCase())){
            ALLCARNE.push(item)
        }
        // if (item.tituloCARNEImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLCARNE.push(item)
        // }
    }   
}