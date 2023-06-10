function getAllHAMBURGUERs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLHAMBURGUER.length == 0){
        MobileUI.ajax.get(url + '/getHAMBURGUERs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                HAMBURGUERs = []
                ALLHAMBURGUER = res.body.data
                searchHAMBURGUER(ALLHAMBURGUER)
                parseAdmHAMBURGUER(ALLHAMBURGUER)
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
            searchHAMBURGUER(ALLHAMBURGUER)
            // parseAdmHAMBURGUER(ALLHAMBURGUER)
        })
    }
}

function searchHAMBURGUER(HAMBURGUERs){
    ALLHAMBURGUER_OLD = HAMBURGUERs
    
    $(document).ready(function(){
        $("#marcaHAMBURGUER").keyup(function(){
            var searchVal = $("#marcaHAMBURGUER").val()
            if (searchVal.length > 0){
                ALLHAMBURGUER = []
                for (var i=0 ; i < ALLHAMBURGUER_OLD.length ; i++)
                {
                    if (validUndefined(ALLHAMBURGUER_OLD[i])){
                        ifHAMBURGUERExists(ALLHAMBURGUER_OLD[i], searchVal, i)
                        // HAMBURGUERPushIfNotExist(ifHAMBURGUERExists(ALLHAMBURGUER_OLD[i], searchVal))
                    }
                }
            } else {
                ALLHAMBURGUER = ALLHAMBURGUER_OLD
            }

        })
    })
}

function HAMBURGUERPushIfNotExist(HAMBURGUER){
    for (var i=0; i < ALLHAMBURGUER; i++){
        if(HAMBURGUER.tituloHAMBURGUERPar !== ALLHAMBURGUER[i].tituloHAMBURGUERPar){
            ALLHAMBURGUER.push(HAMBURGUER)
        }
        if(HAMBURGUER.tituloHAMBURGUERImpar !== ALLHAMBURGUER[i].tituloHAMBURGUERImpar){
            ALLHAMBURGUER.push(HAMBURGUER)
        }
    }
}

function validUndefined(HAMBURGUER){
    if (HAMBURGUER !== undefined){
        return true
    }
}

function ifHAMBURGUERExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloHAMBURGUERPar.toLowerCase().includes(search.toLowerCase())){
            ALLHAMBURGUER.push(item)
        }
        // if (item.tituloHAMBURGUERImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLHAMBURGUER.push(item)
        // }
    }   
}