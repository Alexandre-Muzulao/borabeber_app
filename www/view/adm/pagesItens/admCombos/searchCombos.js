function getAllCOMBOs(){
    loading('Buscando os cervejas no deposito ...')
    if (ALLCOMBO.length == 0){
        MobileUI.ajax.get(url + '/getCOMBOs').query('marca=todas' + '&' + 'userId=' + IDCOMPANY + '').send().then(function (res){
        if(res.body.errorMessage) {
            closeLoading()
            alert(res.body.errorMessage)
        } else {
            closeLoading()
            openPage('./view/adm/pagesItens/admCervejas/cervejasList', function(){
                COMBOs = []
                ALLCOMBO = res.body.data
                searchCOMBO(ALLCOMBO)
                parseAdmCOMBO(ALLCOMBO)
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
            searchCOMBO(ALLCOMBO)
            // parseAdmCOMBO(ALLCOMBO)
        })
    }
}

function searchCOMBO(COMBOs){
    ALLCOMBO_OLD = COMBOs
    
    $(document).ready(function(){
        $("#marcaCOMBO").keyup(function(){
            var searchVal = $("#marcaCOMBO").val()
            if (searchVal.length > 0){
                ALLCOMBO = []
                for (var i=0 ; i < ALLCOMBO_OLD.length ; i++)
                {
                    if (validUndefined(ALLCOMBO_OLD[i])){
                        ifCOMBOExists(ALLCOMBO_OLD[i], searchVal, i)
                        // COMBOPushIfNotExist(ifCOMBOExists(ALLCOMBO_OLD[i], searchVal))
                    }
                }
            } else {
                ALLCOMBO = ALLCOMBO_OLD
            }

        })
    })
}

function COMBOPushIfNotExist(COMBO){
    for (var i=0; i < ALLCOMBO; i++){
        if(COMBO.tituloCOMBOPar !== ALLCOMBO[i].tituloCOMBOPar){
            ALLCOMBO.push(COMBO)
        }
        if(COMBO.tituloCOMBOImpar !== ALLCOMBO[i].tituloCOMBOImpar){
            ALLCOMBO.push(COMBO)
        }
    }
}

function validUndefined(COMBO){
    if (COMBO !== undefined){
        return true
    }
}

function ifCOMBOExists(item, search, index){
    if (isPar(index) == 'par'){
        if (item.tituloCOMBOPar.toLowerCase().includes(search.toLowerCase())){
            ALLCOMBO.push(item)
        }
        // if (item.tituloCOMBOImpar.toLowerCase().includes(search.toLowerCase())){
        //     ALLCOMBO.push(item)
        // }
    }   
}