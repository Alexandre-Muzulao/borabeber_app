function getAllPORCAOs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLPORCAO.length == 0){
        MobileUI.ajax.get(url + '/getPORCAOs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                PORCAOs = []
                ALLPORCAO = res.body.data
                searchPORCAO(ALLPORCAO)
                parseAdmPORCAO(ALLPORCAO)
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
            searchPORCAO(ALLPORCAO)
            // parseAdmPORCAO(ALLPORCAO)
        })
    }
}

function searchPORCAO(PORCAOs){
    ALLPORCAO_OLD = PORCAOs
    
    $(document).ready(function(){
        $("#marcaPORCAO").keyup(function(){
            var searchVal = $("#marcaPORCAO").val()
            if (searchVal.length > 0){
                ALLPORCAO = []
                for (var i=0 ; i < ALLPORCAO_OLD.length ; i++)
                {
                    if (validUndefined(ALLPORCAO_OLD[i])){
                        ifPORCAOExists(ALLPORCAO_OLD[i], searchVal, i)
                        // PORCAOPushIfNotExist(ifPORCAOExists(ALLPORCAO_OLD[i], searchVal))
                    }
                }
            } else {
                ALLPORCAO = ALLPORCAO_OLD
            }

        })
    })
}

function PORCAOPushIfNotExist(PORCAO){
    for (var i=0; i < ALLPORCAO; i++){
        if(PORCAO.tituloPORCAOPar !== ALLPORCAO[i].tituloPORCAOPar){
            ALLPORCAO.push(PORCAO)
        }
        if(PORCAO.tituloPORCAOImpar !== ALLPORCAO[i].tituloPORCAOImpar){
            ALLPORCAO.push(PORCAO)
        }
    }
}

function validUndefined(PORCAO){
    if (PORCAO !== undefined){
        return true
    }
}

function ifPORCAOExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloPORCAOPar.toLowerCase().includes(search.toLowerCase())){
            ALLPORCAO.push(item)
        }
        // if (item.tituloPORCAOImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLPORCAO.push(item)
        // }
    }   
}