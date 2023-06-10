function getAllDRINKs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLDRINK.length == 0){
        MobileUI.ajax.get(url + '/getDRINKs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                DRINKs = []
                ALLDRINK = res.body.data
                searchDRINK(ALLDRINK)
                parseAdmDRINK(ALLDRINK)
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
            searchDRINK(ALLDRINK)
            // parseAdmDRINK(ALLDRINK)
        })
    }
}

function searchDRINK(DRINKs){
    ALLDRINK_OLD = DRINKs
    
    $(document).ready(function(){
        $("#marcaDRINK").keyup(function(){
            var searchVal = $("#marcaDRINK").val()
            if (searchVal.length > 0){
                ALLDRINK = []
                for (var i=0 ; i < ALLDRINK_OLD.length ; i++)
                {
                    if (validUndefined(ALLDRINK_OLD[i])){
                        ifDRINKExists(ALLDRINK_OLD[i], searchVal, i)
                        // DRINKPushIfNotExist(ifDRINKExists(ALLDRINK_OLD[i], searchVal))
                    }
                }
            } else {
                ALLDRINK = ALLDRINK_OLD
            }

        })
    })
}

function DRINKPushIfNotExist(DRINK){
    for (var i=0; i < ALLDRINK; i++){
        if(DRINK.tituloDRINKPar !== ALLDRINK[i].tituloDRINKPar){
            ALLDRINK.push(DRINK)
        }
        if(DRINK.tituloDRINKImpar !== ALLDRINK[i].tituloDRINKImpar){
            ALLDRINK.push(DRINK)
        }
    }
}

function validUndefined(DRINK){
    if (DRINK !== undefined){
        return true
    }
}

function ifDRINKExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloDRINKPar.toLowerCase().includes(search.toLowerCase())){
            ALLDRINK.push(item)
        }
        // if (item.tituloDRINKImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLDRINK.push(item)
        // }
    }   
}