function getAllNARGUILEs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLNARGUILE.length == 0){
        MobileUI.ajax.get(url + '/getNARGUILEs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                NARGUILEs = []
                ALLNARGUILE = res.body.data
                searchNARGUILE(ALLNARGUILE)
                parseAdmNARGUILE(ALLNARGUILE)
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
            searchNARGUILE(ALLNARGUILE)
            // parseAdmNARGUILE(ALLNARGUILE)
        })
    }
}

function searchNARGUILE(NARGUILEs){
    ALLNARGUILE_OLD = NARGUILEs
    
    $(document).ready(function(){
        $("#marcaNARGUILE").keyup(function(){
            var searchVal = $("#marcaNARGUILE").val()
            if (searchVal.length > 0){
                ALLNARGUILE = []
                for (var i=0 ; i < ALLNARGUILE_OLD.length ; i++)
                {
                    if (validUndefined(ALLNARGUILE_OLD[i])){
                        ifNARGUILEExists(ALLNARGUILE_OLD[i], searchVal, i)
                        // NARGUILEPushIfNotExist(ifNARGUILEExists(ALLNARGUILE_OLD[i], searchVal))
                    }
                }
            } else {
                ALLNARGUILE = ALLNARGUILE_OLD
            }

        })
    })
}

function NARGUILEPushIfNotExist(NARGUILE){
    for (var i=0; i < ALLNARGUILE; i++){
        if(NARGUILE.tituloNARGUILEPar !== ALLNARGUILE[i].tituloNARGUILEPar){
            ALLNARGUILE.push(NARGUILE)
        }
        if(NARGUILE.tituloNARGUILEImpar !== ALLNARGUILE[i].tituloNARGUILEImpar){
            ALLNARGUILE.push(NARGUILE)
        }
    }
}

function validUndefined(NARGUILE){
    if (NARGUILE !== undefined){
        return true
    }
}

function ifNARGUILEExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloNARGUILEPar.toLowerCase().includes(search.toLowerCase())){
            ALLNARGUILE.push(item)
        }
        // if (item.tituloNARGUILEImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLNARGUILE.push(item)
        // }
    }   
}